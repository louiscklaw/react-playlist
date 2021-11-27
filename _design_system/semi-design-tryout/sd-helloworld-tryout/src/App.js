import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

function App({ test_branch = false }) {
  return (
    <div className="App">
      <GlobalContextProvider>helloworld 222222</GlobalContextProvider>
    </div>
  );
}

export default App;
