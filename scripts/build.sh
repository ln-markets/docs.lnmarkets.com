#!/usr/bin/env bash

set -o errexit

cp ./images/logo.png ./slate/source/images/logo.png

cp ./_api.md ./slate/source/includes/_api.md

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
