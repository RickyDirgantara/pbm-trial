<?php

use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\AttachVisitorCookie;
use App\Http\Middleware\CacheLandingPage;
use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Http\Request;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        $middleware->validateCsrfTokens(except: ['payment/callback']);

        $middleware->web(append: [
            AttachVisitorCookie::class,
            CacheLandingPage::class,
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        $middleware->alias([
            'admin' => AdminMiddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->shouldRenderJsonWhen(
            fn (Request $request) => $request->is('analytics/*') || $request->expectsJson(),
        );
    })->create();

/*
 * Serverless platforms (Vercel) expose a read-only filesystem apart from /tmp,
 * so Laravel's writable paths are relocated there. /tmp is per-invocation, which
 * means compiled views and the log file are rebuilt on every cold start.
 * On a normal server VERCEL is unset and nothing below runs.
 */
if (getenv('VERCEL')) {
    $app->useStoragePath('/tmp/storage');

    foreach (['framework/views', 'framework/cache/data', 'framework/sessions', 'logs'] as $directory) {
        $path = '/tmp/storage/'.$directory;

        if (! is_dir($path)) {
            mkdir($path, 0755, true);
        }
    }
}

return $app;
