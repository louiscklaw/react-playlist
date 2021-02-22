import React from 'react';
import './App.css';

import {NetworkStatusContextProvider} from "./contexts/NetworkStatus";
import NetworkStatusDisplay from "./components/NetworkStatusDisplay";

function App() {
  return (
    <div className="App">
      <NetworkStatusContextProvider>
        helloworld
        <NetworkStatusDisplay />
      </NetworkStatusContextProvider>
    </div>
  );
}

export default App;
