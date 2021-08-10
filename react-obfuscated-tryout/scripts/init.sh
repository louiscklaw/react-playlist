#!/usr/bin/env bash

set -ex

yarn

npx eslint --init
yarn add react-obfuscate
