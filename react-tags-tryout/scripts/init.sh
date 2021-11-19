#!/usr/bin/env bash

set -ex

# rm -rf node_modules
yarn add react-tag-input
yarn add react-dnd react-dnd-html5-backend

yarn --dev
