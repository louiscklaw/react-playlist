#!/usr/bin/env bash

set -ex

yarn

yarn build


rm -rf ../docs/react-helloworld-tryout
mkdir -p ../docs/react-helloworld-tryout
rsync -avzh --progress build/ ../docs/react-helloworld-tryout
