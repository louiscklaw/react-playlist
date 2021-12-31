#!/usr/bin/env bash

set -ex

echo 'helloworld'

pushd react-helloworld-tryout
  yarn --dev
  yarn build
popd
