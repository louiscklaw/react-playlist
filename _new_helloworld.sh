#!/usr/bin/env bash

set -ex

TEST_DIR=react-use-error-boundary-tryout
HELLOWORLD_DIR=react-helloworld-tryout

rm -rf $TEST_DIR || true

pushd $HELLOWORLD_DIR
  rm -rf **/*.log &
  rm -rf build node_modules &
  rm -rf build &

  wait
popd

cp -r $HELLOWORLD_DIR $TEST_DIR

pushd $TEST_DIR
  rm -rf **/*.log
  rm -rf build node_modules
  yarn --dev
