#!/usr/bin/env bash
#
# Workaround for vercel-community/php#650.
#
# vercel-php builds its lambda with the AWS convention handler
# "launcher.launcher" (<module>.<export>). Since Vercel's Managed Images
# rollout, the Rust/Node bootstrap resolves that string as a literal ESM file
# path instead, so every invocation dies with:
#
#   ERR_MODULE_NOT_FOUND: Cannot find module '/var/task/launcher.launcher'
#
# Rewriting the handler to the file-path form fixes it; the launcher already
# exports `launcher` as a CommonJS named export, so nothing else changes.
#
# Remove this script once the upstream issue is released.
set -euo pipefail

patched=0

while IFS= read -r file; do
    if grep -q "handler: 'launcher.launcher'" "$file"; then
        sed -i "s/handler: 'launcher.launcher'/handler: 'launcher.js'/g" "$file"
        echo "build-patch: patched handler in $file"
        patched=$((patched + 1))
    fi
done < <(find /vercel -path '*vercel-php*' -name 'index.js' 2>/dev/null || true)

if [ "$patched" -eq 0 ]; then
    echo "build-patch: nothing to patch — vercel-php runtime not found or already fixed upstream." >&2
fi
