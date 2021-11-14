#!/usr/bin/env bash

set -ex

export GOOGLE_APPLICATION_CREDENTIALS=$HOME/.firebase-keys/firebase-adminsdk-vw9ya@react-tryout-e8aa2.iam.gserviceaccount.com.json

sudo killall firebase || true &
sleep 1

sudo killall java || true &

sudo kill $(fuser 4000/tcp) || true &
sudo kill $(fuser 9099/tcp) || true &
sudo kill $(fuser 9000/tcp) || true &
sudo kill $(fuser 8080/tcp) || true &
sudo kill $(fuser 5001/tcp) || true &
sudo kill $(fuser 5002/tcp) || true &
sudo kill $(fuser 9199/tcp) || true &
sudo kill $(fuser 4400/tcp) || true &
sudo kill $(fuser 4500/tcp) || true &

wait

sleep 1

firebase --version

nice firebase emulators:start
