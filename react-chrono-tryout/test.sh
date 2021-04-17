#!/usr/bin/env bash

set -ex

trap 'catch' ERR EXIT KILL
catch() {
  echo "An error has occurred but we're going to eat it!!"
  rm -rf $TMP_DIR
}

TMP_DIR=$(mktemp -d)

rsync -avzh \
  --exclude "node_modules" \
  --exclude "build" \
  --exclude ".cache" \
  --exclude ".git" \
  --exclude "public" \
  --progress ./ $TMP_DIR

cd $TMP_DIR
  yarn
  yarn build

cd build
  live-server --port=8001 .
