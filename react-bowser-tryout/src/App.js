import React from 'react';
import Bowser from "bowser";

import './App.css';

function App() {
  const browser = Bowser.getParser(window.navigator.userAgent);

  return (
    <div className="App">
      <div>helloworld</div>
      <pre style={{textAlign:'left'}}>
        {JSON.stringify(browser, null ,2 )}
      </pre>
    </div>
  );
}

export default App;
