#!/usr/bin/env bash

set -ex

export GOOGLE_APPLICATION_CREDENTIALS=/home/logic/.firebase-keys/lynked-demo-tryout-firebase-adminsdk-h5zru-2586f8f0a0.json

reset

firebase emulators:start
