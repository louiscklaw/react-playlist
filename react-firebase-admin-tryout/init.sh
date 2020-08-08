#!/usr/bin/env bash

set -ex

node -v

rm -rf react-firebase-admin

git clone --depth=1 https://github.com/CreateThrive/react-firebase-admin

# sudo npm install -g firebase-tools

# rm -rf react-firebase-admin/.firebaserc

rsync -avzh overlay/react-firebase-admin/ react-firebase-admin

cd react-firebase-admin
  firebase init

  cd functions
    npm install -d
    npm run setup-firebase
  cd ..

  npm install -d
  npm run setup-admin-dashboard

cd ..
