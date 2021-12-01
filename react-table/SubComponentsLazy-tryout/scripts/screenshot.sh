#!/usr/bin/env bash
# /home/logic/_workspace/react-playlist/react-mui-timeline-tryout/src/screenshot_helloworld.test.js

set -ex

yarn add --dev puppeteer

mkdir -p docs

yarn test
