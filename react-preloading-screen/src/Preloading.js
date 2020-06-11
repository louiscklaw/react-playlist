import React from 'react';

import { Preloader, Placeholder } from 'react-preloading-screen';
import './App.css';

import dummuy_text from './dummy_text_file.txt'

import App from './App'

function Preloading() {
  return (
    <Preloader>
      <App />
      <Placeholder>
          <span>Loading...</span>
      </Placeholder>
    </Preloader>
  );
}

export default Preloading;
