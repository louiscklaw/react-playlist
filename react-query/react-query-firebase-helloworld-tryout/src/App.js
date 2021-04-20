import React from 'react';

import User from './User';
import TestReactQuery from './TestReactQuery';
import TestReactQueryFirebase from './TestReactQueryFirebase';

import './App.css';

function App() {
  return (
    <div className="App">
      <User />
      <TestReactQueryFirebase />
      <TestReactQuery />
      helloworld
    </div>
  );
}

export default App;
