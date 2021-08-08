#!/usr/bin/env bash

set -ex


scripts/lint_modified.sh
scripts/tidy_modified.sh
# scripts/test_modified.sh

# yarn test -o --watchAll=false

wait
