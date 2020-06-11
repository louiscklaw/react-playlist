#!/usr/bin/env bash

set -x

find . -mindepth 1 -exec rm -rf -- {} +

set -ex

git checkout develop
TEST=`echo $PWD|rev |cut -d'/' -f1 |rev`
git checkout -b test/$TEST

npx create-react-app .

echo -e "\a"
echo -e "if you need to install custom npm package, please do it now"
read -p 'press any key to start yarn build'

yarn build

git add .
git commit . -m"ci: init new example $1"

yarn start
