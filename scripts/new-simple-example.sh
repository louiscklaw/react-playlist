#!/usr/bin/env bash

set -ex

TEST=`echo $PWD|rev |cut -d'/' -f1 |rev`

git checkout -b test/$TEST

npx create-react-app .

yarn build &

git add .
git commit -m"init commit for $TEST"

git push --set-upstream origin test/$TEST &

wait

yarn start
