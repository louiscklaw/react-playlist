#!/usr/bin/env bash

set -ex

npx browserslist@latest --update-db

yarn --dev

yarn start
