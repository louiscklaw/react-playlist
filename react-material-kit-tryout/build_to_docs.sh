#!/usr/bin/env bash

set -ex

yarn

yarn build


rm -rf ../docs/react-material-kit-tryout
mkdir -p ../docs/react-material-kit-tryout
rsync -avzh --progress build/ ../docs/react-material-kit-tryout

rm -rf node_modules
