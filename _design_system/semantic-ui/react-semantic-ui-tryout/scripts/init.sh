#!/usr/bin/env bash

set -ex

rm -rf node_modules

yarn add semantic-ui-react semantic-ui-css

yarn --dev
