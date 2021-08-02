#!/usr/bin/env bash

set -ex

yarn

# npx eslint --init

yarn add react-icons
yarn add @chakra-ui/react \
  @emotion/react@^11 \
  @emotion/styled@^11 \
  framer-motion@^4 \
  @chakra-ui/icons \
  react-spinners \
  react-lorem-component \
  react-router-dom@6 history@5
