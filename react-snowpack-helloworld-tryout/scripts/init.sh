#!/usr/bin/env bash

set -ex

rm -rf react-snowpack-helloworld-tryout

npx create-snowpack-app react-snowpack-helloworld-tryout \
  --template @snowpack/app-template-minimal \
  --use-yarn


pushd react-snowpack-helloworld-tryout
  rsync -avzh --progress ../src/ src
  rsync -avzh --progress ../public/ public

  yarn add react react-dom
  yarn start
popd