#!/usr/bin/env bash

set -ex

rm -rf node_modules || true
# rm -rf /tmp/metro-* || true

yarn --dev

npx browserslist@latest --update-db

sudo kill $(fuser 3000/tcp) || true

yarn start
