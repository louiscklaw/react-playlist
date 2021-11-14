#!/usr/bin/env bash

set -ex

npx create-snowpack-app snowpack-react-js-tryout --template @snowpack/app-template-minimal
cd snowpack-react-js-tryout
npm run start
