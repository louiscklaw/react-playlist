#!/usr/bin/env bash

set -ex

yarn --dev

yarn test --maxWorkers=2  --coverage --watchAll
