#!/usr/bin/env bash

set -o errexit

deploy_directory=build
deploy_branch=gh-pages

./scripts/deploy.sh
