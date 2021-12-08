#!/usr/bin/env bash

set -ex

rm -rf node_modules

yarn add use-error-boundary

yarn --dev
