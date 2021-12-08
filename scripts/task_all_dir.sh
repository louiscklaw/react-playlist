#!/usr/bin/env bash


set -e


for i in `find .  -maxdepth 1 -type d |grep -v .git  |grep -v '\.$' |sort`
do
  echo $i
  pushd $i
    # if [ -f "scripts/dev.sh" ]; then
    #   echo $i ' skip as already exist'
    # else
    #   if [ -f "package.json" ]; then
    #     mkdir -p scripts
    #     cp /home/logic/_workspace/react-playlist/react-jodit-tryout/scripts/dev.sh ./scripts/dev.sh &
    #   fi
    # fi

    if [ -f "package.json" ]; then
      yarn build
    fi
  popd
done

wait 

