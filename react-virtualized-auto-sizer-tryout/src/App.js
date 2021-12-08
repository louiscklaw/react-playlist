import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import Example from './components/Example';

function App({ test_branch = false }) {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Example />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
