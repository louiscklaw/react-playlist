import React from 'react';

import './App.css';

import HelloJavascript from './components/hello_javascript';
import HelloHtml from './components/hello_html';

function App() {

  return (
    <div className="App">
      <HelloJavascript></HelloJavascript>
      <HelloHtml></HelloHtml>
    </div>
  );
}

export default App;
