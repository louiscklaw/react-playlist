#!/usr/bin/env bash

set -ex

npx browserslist@latest --update-db

yarn

rm -rf src/consts
mkdir -p src/consts

rsync -avzh ../src_shared/consts/colors.js src/consts/colors.js
rsync -avzh ../src_shared/consts/ColorLuminance.js src/consts/ColorLuminance.js

yarn start
