#!/usr/bin/env bash

set -ex

rm -rf baseui-tryout

cp -r ../react-helloworld-tryout ./baseui-tryout
  
pushd baseui-tryout
  npx -p @storybook/cli sb init

  yarn --dev

  yarn storybook

