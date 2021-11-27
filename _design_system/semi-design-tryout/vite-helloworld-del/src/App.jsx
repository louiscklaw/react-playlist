import React from 'react';
import { GlobalContextProvider } from './contexts/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <>helloworld 123321</>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
