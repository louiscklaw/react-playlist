import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ten_mega_file from './10M.txt'

var Preload = require('react-preload').Preload

var loadingIndicator = (<div>Loading...</div>);
var images = [];

ReactDOM.render(
  <Preload
      loadingIndicator={loadingIndicator}
      images={images}
      autoResolveDelay={3000}
      // onError={this._handleImageLoadError}
      // onSuccess={this._handleImageLoadSuccess}
      resolveOnError={true}
      mountChildren={true}
  >
      <App />
  </Preload>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
