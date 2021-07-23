#!/usr/bin/env bash

set -ex

rm -rf build

npx browserslist@latest --update-db

yarn


rsync -avzh ../src_shared/consts/colors.js src/consts/colors.js
rsync -avzh ../src_shared/consts/ColorLuminance.js src/consts/ColorLuminance.js

yarn build
