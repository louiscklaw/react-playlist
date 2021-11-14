#!/usr/bin/env bash

set -ex


pushd test-server
  nodemon index.js
popd
