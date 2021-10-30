#!/usr/bin/env bash

set -ex

yarn eslint-fix
yarn lint-fix
