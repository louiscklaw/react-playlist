#!/usr/bin/env bash

export BROWSER=none

set -e

scripts/test/unit_test.sh
scripts/test/e2e_test.sh
