#!/usr/bin/env bash

rm -rf react-dashboard-tryout || true

git clone -o react-dashboard -b master --single-branch \
      https://github.com/flatlogic/react-dashboard.git react-dashboard-tryout

pushd react-dashboard-tryout
  yarn install
  yarn add sqlite3
  yarn dev

