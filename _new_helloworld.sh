#!/usr/bin/env bash

set -ex

TEST_DIR=react-page-lifecycle-tryout

rm -rf $TEST_DIR || true

cp -r react-helloworld-tryout $TEST_DIR

pushd $TEST_DIR
  rm -rf **/*.log
  rm -rf build node_modules
  yarn --dev
