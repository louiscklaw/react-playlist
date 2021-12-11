import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

import AppContext from './contexts/AppContext';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
