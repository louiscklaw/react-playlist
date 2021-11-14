#!/usr/bin/env bash

set -ex

export GOOGLE_APPLICATION_CREDENTIALS=$HOME/.firebase-keys/firebase-adminsdk-vw9ya@react-tryout-e8aa2.iam.gserviceaccount.com.json

firestore-import -y --nodePath users --backupFile ./scripts/users.json 
