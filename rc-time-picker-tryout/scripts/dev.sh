#!/usr/bin/env bash

set -ex

yarn

cp /home/logic/_workspace/react-playlist/rc-time-picker-tryout/src/lib_patch/rc-time-picker/es/Header.js /home/logic/_workspace/react-playlist/rc-time-picker-tryout/node_modules/rc-time-picker/es/Header.js
# cp /home/logic/_workspace/react-playlist/rc-time-picker-tryout/src/lib_patch/rc-time-picker/es/TimePicker.js /home/logic/_workspace/react-playlist/rc-time-picker-tryout/node_modules/rc-time-picker/es/TimePicker.js

yarn start
