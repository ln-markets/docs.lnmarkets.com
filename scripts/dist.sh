#!/usr/bin/env bash

set -o errexit

deploy_directory=dist
deploy_branch=dist

./scripts/deploy.sh
