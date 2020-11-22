#!/usr/bin/env bash

set -ex

yarn

yarn build


rm -rf ../docs/react-material-ui-helloworld-tryout
mkdir -p ../docs/react-material-ui-helloworld-tryout
rsync -avzh --progress build/ ../docs/react-material-ui-helloworld-tryout
