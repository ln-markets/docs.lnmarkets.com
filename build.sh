#!/usr/bin/env bash

set -o errexit

cd docs

for filename in *.md
do
    if [ $filename = 'index.html.md' ]; then
        cp index.html.md ../slate/source
    else
        cp "$filename" "../slate/source/includes/_$filename"
    fi
done

cd ../slate

bundle exec middleman build --clean --build-dir ../build
