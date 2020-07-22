import React from 'react';

import './App.css';

import {FirebaseContextProvider} from './contexts/firebase-context'

function App() {
  return (
    <div className="App">
      <FirebaseContextProvider>

        helloworld
      </FirebaseContextProvider>
    </div>
  );
}

export default App;
