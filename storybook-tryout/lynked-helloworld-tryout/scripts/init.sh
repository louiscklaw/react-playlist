#!/usr/bin/env bash

set -ex

# yarn remove @mui/material @emotion/react @emotion/styled || true
# yarn remove @mui/material @mui/styled-engine-sc styled-components || true
# yarn remove @mui/icons-material || true

yarn add @material-ui/core
yarn add @material-ui/icons
yarn add @fontsource/roboto

yarn --dev
