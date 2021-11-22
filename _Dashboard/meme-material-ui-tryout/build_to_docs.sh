#!/usr/bin/env bash

set -ex

NOW=`date '+%F_%H:%M:%S'`

yarn

yarn build

rm -rf ../docs/meme-material-ui-tryout
mkdir -p ../docs/meme-material-ui-tryout
rsync -avzh --progress build/ ../docs/meme-material-ui-tryout

rm -rf node_modules
