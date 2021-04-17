#!/usr/bin/env bash

reset
set -x

yarn
yarn build

# firebase hosting:channel:deploy react-stripe-payment-request-button-tryout 2>&1 > deploy_snapshot.log

# cat deploy_snapshot.log


firebase deploy --only hosting

# pushd functions
#   npm run deploy
# popd
