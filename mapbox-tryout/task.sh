#!/usr/bin/env bash


set -e

for i in `find .  -maxdepth 1 -type d |grep -v .git  |grep -v '\.$' |sort`
do
  pushd $i
    if [ -f "scripts/upgrade.sh" ]; then
      scripts/upgrade.sh &
    fi
  popd
done

wait 

