#!/usr/bin/env bash

set -ex

yarn build

pushd build
  browser-sync start -s --https
