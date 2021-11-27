#!/usr/bin/env zsh

set -ex


pushd sd-vite-layout-tryout
  rm -rf node_modules || true
  rm -rf **/*.log || true
popd

cp -r sd-vite-layout-tryout sd-vite-button-tryout
