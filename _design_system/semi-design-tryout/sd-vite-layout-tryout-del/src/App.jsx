import React from 'react';


import { GlobalContextProvider } from './contexts/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <>helloworld 2222</>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
