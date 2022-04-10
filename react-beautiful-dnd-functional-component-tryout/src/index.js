import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import ShareContextProvider from './context/Share';

const saveJson = () => {
  alert('save json');
};

const reloadJson = () => {
  alert('reload json');
};

ReactDOM.render(
  <React.StrictMode>
    <ShareContextProvider saveJson={saveJson} reloadJson={reloadJson}>
      <App />
    </ShareContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
