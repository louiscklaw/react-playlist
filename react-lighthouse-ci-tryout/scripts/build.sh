#!/usr/bin/env bash

set -ex

yarn lhci healthcheck
yarn lhci autorun