#!/usr/bin/env bash

set -ex

rm -rf node_modules

yarn add react-virtualized

yarn --dev
