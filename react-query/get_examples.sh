#!/usr/bin/env bash

set -ex

TMP_DIR=`mktemp -d`

pushd $TMP_DIR
  git clone --depth=1 git@github.com:tannerlinsley/react-query.git 
  pushd react-query
    cp -r examples/ /home/logic/_workspace/react-playlist/react-query/examples
  popd
popd