#!/usr/bin/env bash

set -ex


export PUPPETEER_SKIP_DOWNLOAD='true'

# rm -rf node_modules

yarn add react-table

yarn --dev
