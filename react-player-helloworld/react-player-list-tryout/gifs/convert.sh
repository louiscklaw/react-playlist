#!/usr/bin/env bash

ffmpeg -i screen1.webm \
  -filter:v "fps=15,scale=720:-1" helloworld.gif

