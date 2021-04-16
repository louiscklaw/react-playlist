import React from 'react';
import './App.css';

import { NetworkStatusContextProvider } from './contexts/NetworkStatus';
import NetworkStatusDisplay from './components/NetworkStatusDisplay';

function App() {
  let test_url = `https://firebasestorage.googleapis.com/v0/b/fir-tryout-f4e7a.appspot.com/o`;
  return (
    <div className="App">
      <NetworkStatusContextProvider url={test_url}>
        <NetworkStatusDisplay url={test_url} />
      </NetworkStatusContextProvider>
    </div>
  );
}

export default App;
