import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import TestCrisp from './TestCrisp';

function App({ test_branch = false }) {
  return (
    <div className="App">
      123
      <GlobalContextProvider>
        <TestCrisp />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
