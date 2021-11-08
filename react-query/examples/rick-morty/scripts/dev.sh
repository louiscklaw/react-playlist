#!/usr/bin/env bash

set -ex

yarn add --dev eslint-config-prettier
yarn --dev

yarn start
