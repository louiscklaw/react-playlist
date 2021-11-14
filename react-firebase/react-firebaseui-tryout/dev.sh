#!/usr/bin/env bash

set -ex

export PORT=80
export BROWSER=none

sudo sysctl vm.drop_caches=3

yarn
yarn upgrade
yarn start
