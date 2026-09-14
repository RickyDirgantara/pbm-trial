<?php

/**
 * Vercel serverless entry point.
 *
 * Vercel exposes functions from the `api/` directory, while Laravel's front
 * controller lives in `public/`. This file simply delegates to it so there is
 * only one bootstrap path to maintain.
 */
require __DIR__.'/../public/index.php';
