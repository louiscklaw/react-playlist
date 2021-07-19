#!/usr/bin/env bash

set -ex

yarn --dev  --check-files

yarn test --maxWorkers=2
