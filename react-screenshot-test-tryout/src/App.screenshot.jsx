import React from 'react';
import { ReactScreenshotTest } from 'react-screenshot-test';
import './index.css';
import App from './App';

ReactScreenshotTest.create('App')
  .viewport('Desktop', {
    width: 1024,
    height: 768,
  })
  .viewport('iPhone X', {
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    isLandscape: false,
  })
  .shoot('app', <App />)
  .run();
