#!/usr/bin/env bash

set -ex

yarn --dev

docker pull fwouts/chrome-screenshot:1.2.2

yarn screenshot-test-local
# yarn test -- --coverage
