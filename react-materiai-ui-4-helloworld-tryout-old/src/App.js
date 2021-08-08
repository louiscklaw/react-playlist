import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import ComponentHelloworld from 'src/components/Helloworld';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <ComponentHelloworld />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
