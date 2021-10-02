#!/usr/bin/env bash

set -ex

rm -rf node_modules

yarn --dev
yarn add react-dual-listbox

# yarn add @fortawesome/fontawesome-svg-core
# yarn add @fortawesome/free-solid-svg-icons
# yarn add @fortawesome/react-fontawesome
