'use strict';

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const REPORTS_PATH = path.join(__dirname, 'reports', 'e2e');

function defaultScreenshotPath(nightwatchClient, basePath, fileName) {
  return path.join(
    nightwatchClient.options.screenshotsPath ||
      basePath ||
      'reports/screenshots',
    nightwatchClient.options.desiredCapabilities.platform || 'ANY',
    nightwatchClient.options.desiredCapabilities.browserName || 'UNKNOWN',
    nightwatchClient.options.desiredCapabilities.version || 'UNKNOWN',
    nightwatchClient.currentTest.name,
    fileName.replace(/ /g, '_')
  );
}

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['tests'],
  output_folder: REPORTS_PATH,
  custom_assertions_path: ['node_modules/nightwatch-vrt/assertions'],
  custom_commands_path: ['node_modules/nightwatch-vrt/commands'],

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: 'node_modules/.bin/chromedriver',
    loggingPrefs: { driver: 'INFO', server: 'OFF', browser: 'INFO' },
    javascriptEnabled: true,
    acceptSslCerts: true,
    cli_args: [
      '--verbose',
      '--no-sandbox',
      '--disk-cache-size=68157440 ',
      '--disable-web-security ',
      '--use-gl=desktop ',
      '--enable-features=VaapiVideoDecoder ',
      '--ignore-gpu-blacklist ',
      '--enable-gpu-rasterization ',
      '--enable-parallel-downloading ',
      '--smooth-scrolling ',
      '--enable-zero-copy',
    ],
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      desiredCapabilities: {
        browserName: 'chrome',
        alwaysMatch: {
          acceptInsecureCerts: true,
        },
      },
    },
    integration: {
      globals: {
        myGlobalVar: 'integrated global',
      },
    },
  },
};
