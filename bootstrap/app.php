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

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // The app always sits behind a reverse proxy (nginx, Cloudflare, or a
        // tunnel), which terminates TLS and forwards plain HTTP. Without this,
        // Laravel builds http:// asset URLs on an https:// page and the browser
        // blocks every one of them as mixed content.
        $middleware->trustProxies(at: '*');

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
