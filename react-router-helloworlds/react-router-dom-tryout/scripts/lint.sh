#!/usr/bin/env bash

set -ex

# eslint -c ./.eslintrc.js src
eslint -c ./.eslintrc.js src \
  --ignore-pattern src/tests \
  --ignore-pattern *.test.js \
  --max-warnings 5 --fix
