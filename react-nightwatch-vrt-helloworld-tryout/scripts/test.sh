#!/usr/bin/env bash

set -ex

yarn --dev

# yarn test -- --coverage
yarn nightwatch --env integration
