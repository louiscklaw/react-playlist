#!/usr/bin/env bash

set -ex

yarn --dev

yarn test:e2e
