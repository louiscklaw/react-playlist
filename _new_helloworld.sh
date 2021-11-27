#!/usr/bin/env bash

set -ex

TEST_DIR=_design_system/semi-design-tryout/sd-helloworld-tryout
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
