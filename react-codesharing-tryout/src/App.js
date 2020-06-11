import React from 'react';

import CodesandboxHelloworld from './codesandbox_helloworod'
import CodepenShareHelloworld from './codepen_share'

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div>CodesandboxHelloworld</div>
        <CodesandboxHelloworld />
      </div>
      <div>
        <div>CodepenShareHelloworld</div>
        <CodepenShareHelloworld />
      </div>

    </div>
  );
}

export default App;
