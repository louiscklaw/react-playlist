#!/usr/bin/env bash

set -ex

yarn

yarn build

rm -rf ../docs/react-material-ui-tryout
mkdir -p ../docs/react-material-ui-tryout
rsync -avzh --progress build/ ../docs/react-material-ui-tryout

rm -rf node_modules
