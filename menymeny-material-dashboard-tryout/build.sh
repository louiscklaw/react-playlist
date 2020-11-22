#!/usr/bin/env bash

set -ex

yarn
yarn build

rm -rf ../docs/menymeny-material-dashboard-tryout
mkdir -p ../docs/menymeny-material-dashboard-tryout
rsync -avzh --progress build/ ../docs/menymeny-material-dashboard-tryout
