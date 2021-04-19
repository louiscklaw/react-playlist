#!/usr/bin/env bash

set -ex

firebase setup:emulators:database
firebase setup:emulators:firestore
firebase setup:emulators:pubsub
firebase setup:emulators:ui