#!/usr/bin/env bash

set -ex

yarn

yarn build

rm -rf ../docs/react-material-dashboard-tryout
mkdir -p ../docs/react-material-dashboard-tryout
rsync -avzh --progress build/ ../docs/react-material-dashboard-tryout

rm -rf node_modules
