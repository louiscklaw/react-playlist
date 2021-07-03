#!/usr/bin/env bash

set -ex

yarn

yarn add nightwatch

yarn add chromedriver --save-dev
yarn add geckodriver --save-dev

# safaridriver --enable
