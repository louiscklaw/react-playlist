#!/usr/bin/env bash

set -ex


yarn add @testing-library/jest-dom
yarn add @testing-library/react
yarn add @testing-library/user-event
# yarn add firebase
yarn add react
yarn add react-dom
yarn add react-scripts

yarn --dev

yarn start
