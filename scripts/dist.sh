#!/usr/bin/env bash

set -o errexit

deploy_branch=dist deploy_directory=dist ./scripts/deploy.sh
