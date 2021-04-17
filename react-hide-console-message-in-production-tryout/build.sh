#!/usr/bin/env bash
set -ex

rm -rf build/index.html
rm -rf build/index.html.bak

yarn build

python3 ./add_console_watermark.py
