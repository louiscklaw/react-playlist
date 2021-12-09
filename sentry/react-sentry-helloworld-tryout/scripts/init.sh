#!/usr/bin/env bash

set -ex

yarn add @sentry/react @sentry/tracing

yarn --dev
