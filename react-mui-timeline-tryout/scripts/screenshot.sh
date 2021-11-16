#!/usr/bin/env bash

set -ex

pushd __tests__
  node ./screenshot_helloworld.js

popd