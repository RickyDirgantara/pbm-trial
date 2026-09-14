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
# Deliberately never fails the build: if the runtime moves or the fix ships
# upstream, the build should carry on and say so rather than break.
#
# Remove this script once the upstream issue is released.

echo "build-patch: looking for the vercel-php runtime"

patched=0
found=0

# Scoped to the build workspace: searching from / would crawl the whole
# container image and stall the build.
search_roots=""
for root in /vercel "${PWD}/.vercel" /tmp; do
    [ -d "$root" ] && search_roots="$search_roots $root"
done

if [ -z "$search_roots" ]; then
    echo "build-patch: no build directories to search — not running on Vercel?"
    exit 0
fi

echo "build-patch: searching in$search_roots"

for file in $(find $search_roots -path '*vercel-php*' -name 'index.js' -type f 2>/dev/null); do
    found=$((found + 1))
    echo "build-patch: candidate $file"

    if grep -q "handler: 'launcher.launcher'" "$file" 2>/dev/null; then
        if sed -i "s/handler: 'launcher.launcher'/handler: 'launcher.js'/g" "$file" 2>/dev/null; then
            echo "build-patch: PATCHED $file"
            patched=$((patched + 1))
        else
            echo "build-patch: FAILED to write $file (read-only?)"
        fi
    else
        echo "build-patch: no matching handler in $file"
    fi
done

echo "build-patch: candidates=$found patched=$patched"

if [ "$patched" -eq 0 ]; then
    echo "build-patch: WARNING — nothing was patched; the function may still crash with ERR_MODULE_NOT_FOUND"
fi

exit 0
