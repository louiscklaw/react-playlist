import React from 'react';
import './App.css';

import {NetworkStatusContextProvider} from "./contexts/NetworkStatus";

function App() {
  return (
    <div className="App">
      <NetworkStatusContextProvider>
        helloworld
      </NetworkStatusContextProvider>
    </div>
  );
}

export default App;
