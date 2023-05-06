#!/usr/bin/env bash

set -ex

rm -rf react18-helloworld
npx create-react-app react18-helloworld

pushd react18-helloworld
  npm i -D
  npm run build
  # npm run start
  npx http-serve build
popd

# TEST_DIR=/tmp/_del/_llaw_del/react-flip-toolkit-tryout
# HELLOWORLD_DIR=react-helloworld-tryout

# rm -rf $TEST_DIR || true

# pushd $HELLOWORLD_DIR
#   rm -rf **/*.log &
#   rm -rf build node_modules &
#   rm -rf build &

#   wait
# popd

# cp -r $HELLOWORLD_DIR $TEST_DIR

# pushd $TEST_DIR
#   rm -rf **/*.log
#   rm -rf build node_modules
#   yarn --dev
