#!/usr/bin/env bash

set -ex

yarn add baseui styletron-react styletron-engine-atomic
yarn add eslint-plugin-baseui --dev

yarn --dev
