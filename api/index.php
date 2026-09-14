<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

/*
 * Vercel serverless entry point — a standalone copy of Laravel's front
 * controller (public/index.php) with paths resolved one level up.
 *
 * It cannot simply require public/index.php: Vercel serves everything under
 * public/ as static files, so that file is excluded from the deployment via
 * .vercelignore. Were it present, requests to "/" would download the PHP
 * source instead of executing it, because static files take precedence over
 * rewrites.
 *
 * Keep this in sync with public/index.php, which still serves normal hosting.
 */

define('LARAVEL_START', microtime(true));

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel and handle the request...
/** @var Application $app */
$app = require_once __DIR__.'/../bootstrap/app.php';

$app->handleRequest(Request::capture());
