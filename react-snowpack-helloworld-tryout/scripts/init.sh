#!/usr/bin/env bash

set -ex

rm -rf react-snowpack-helloworld-tryout

npx create-snowpack-app \
  react-snowpack-helloworld-tryout \
  --template @snowpack/app-template-react \
  --use-yarn

pushd react-snowpack-helloworld-tryout
  # rsync -avzh --progress ../customize/src/ src
  # rsync -avzh --progress ../customize/public/ public
  rsync -avzh --progress ../customize/ .

  sed -i '3 a "test:e2e":"jest --rootDir=tests --watch"\,' package.json

  yarn add --dev jest puppeteer jest-image-snapshot
  yarn --dev  --check-files

  yarn format
  yarn lint
  yarn test
  yarn build
  yarn start

popd
