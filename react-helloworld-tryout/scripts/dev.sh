#!/usr/bin/env bash

set -ex

export BROWSER=none

# rm -rf node_modules || true
# rm -rf /tmp/metro-* || true

yarn 

sudo kill $(fuser 3000/tcp) || true

yarn start
