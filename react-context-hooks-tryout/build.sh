#!/usr/bin/env bash

set -ex

cd hooksapp
  yarn
  yarn build
cd ..

cd contextapp
  yarn
  yarn build
cd ..

cd booklist
  yarn
  yarn build
cd ..
