#!/usr/bin/env bash
# example: scripts/test.sh 2>&1 | tee test.log

set -x

export GOOGLE_APPLICATION_CREDENTIALS=/home/logic/.firebase-keys/lynked-demo-tryout-firebase-adminsdk-h5zru-2586f8f0a0.json
export FIRESTORE_EMULATOR_HOST="localhost:8080"


helloworld () {
  echo "e2e tset hello world"
}

helloworld
