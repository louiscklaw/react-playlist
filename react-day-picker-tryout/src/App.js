import React from 'react';
import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <HelloComponent />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
