#!/usr/bin/env bash

set -ex

# rm -rf node_modules || true
# rm -rf /tmp/metro-* || true

yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/material @mui/styled-engine-sc styled-components
yarn add @mui/icons-material

yarn --dev

sudo kill $(fuser 3000/tcp) || true

yarn start
