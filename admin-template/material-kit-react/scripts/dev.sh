#!/usr/bin/env bash

set -ex

yarn --dev

npx browserslist@latest --update-db

yarn start
