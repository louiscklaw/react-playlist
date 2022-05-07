#!/usr/bin/env bash

set -ex

yarn

yarn add --dev tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

yarn add @craco/craco

# // package.json
# "scripts": {
#   // "start": "react-scripts start",
#   // "build": "react-scripts build",
#   // "test": "react-scripts test",
#   "start": "craco start",
#   "build": "craco build",
#   "test": "craco test",
#   "eject": "react-scripts eject"
# },

# // craco.config.js
# module.exports = {
#   style: {
#     postcss: {
#       plugins: [
#         require('tailwindcss'),
#         require('autoprefixer'),
#       ],
#     },
#   },
# }

# // tailwind.config.js
# module.exports = {
#   purge: [],
#   darkMode: false, // or 'media' or 'class'
#   theme: {
#     extend: {},
#   },
#   variants: {
#     extend: {},
#   },
#   plugins: [],
# }