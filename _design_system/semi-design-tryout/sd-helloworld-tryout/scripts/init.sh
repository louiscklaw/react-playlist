#!/usr/bin/env bash

set -ex

rm -rf node_modules

yarn add @douyinfe/semi-ui

# import 'reset-css';
yarn add reset-css

yarn --dev
