import React from 'react';

import './App.css';

import TestComp from './components/test_comp'

import {FirebaseContextProvider} from './contexts/firebase-context'

function App() {
  return (
    <div className="App">
      <FirebaseContextProvider>
        <TestComp />
      </FirebaseContextProvider>
    </div>
  );
}

export default App;
