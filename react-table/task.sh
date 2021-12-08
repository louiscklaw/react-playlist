#!/usr/bin/env bash

set -ex

for i in `find .  -maxdepth 1 -type d |grep -v .git  |grep -v '\.$' |sort`
do
  pushd $i
    echo $i
    rm -rf package-lock.json | true
    rm -rf yarn.lock | true
    rm -rf node_modules | true

    yarn add react react-dom
    yarn add --dev eslint-config-prettier
    yarn

  popd
done

wait 

