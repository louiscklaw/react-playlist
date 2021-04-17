#!/usr/bin/env bash

set -ex

rm -rf build/*

yarn

yarn build

rm -rf build/**/*.js.map

firebase deploy --only "hosting"
