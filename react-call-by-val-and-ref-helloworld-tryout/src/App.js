import React from 'react';
import Helloworld from 'src/components/Helloworld';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Helloworld />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
