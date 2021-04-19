#!/usr/bin/env bash

set -ex

bash ./build.sh

# firebase deploy
firebase hosting:channel:deploy react-query-firebase-helloworld-tryout

firebase functions deploy