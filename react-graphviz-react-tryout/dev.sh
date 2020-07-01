#!/usr/bin/env bash

set -ex


# N.B. There is currently an issue with react-scripts and the viz.js package used by d3-graphviz that causes heap overflows when running react-scripts start and react-scripts build. To get around this set --max_old_space_size=4096 when running. This can be done by either running the following:

# NODE_OPTIONS=--max_old_space_size=4096 npm run start

export NODE_OPTIONS=--max_old_space_size=4096

yarn

# yarn build

yarn start

# done