#!/usr/bin/env bash

set -ex

echo 'helloworld'

pushd react-helloworld-tryout
  scripts/build.sh
popd

pushd react-firebase-ci-tryout
  scripts/test.sh
popd
