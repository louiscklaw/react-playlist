#!/usr/bin/env bash

set -ex

killall serve || true
rm -rf build || true

yarn install --check-files
yarn build

serve -s build -p 12345 &

yarn --dev  --check-files
yarn test --maxWorkers=2
# yarn test -- --coverage
# yarn test --detectOpenHandles

killall serve || true
