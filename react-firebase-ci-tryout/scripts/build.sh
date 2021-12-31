#!/usr/bin/env bash

set -ex

pushd App
  yarn --dev
  yarn build
popd