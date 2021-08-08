#!/usr/bin/env bash

set -ex

yarn

# npx eslint --init
yarn add react-router-dom@6
yarn add history@6
yarn add xstate @xstate/react
