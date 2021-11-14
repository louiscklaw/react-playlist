#!/usr/bin/env bash

set -ex

rm -rf node_modules

yarn --dev

yarn add react-router-dom
