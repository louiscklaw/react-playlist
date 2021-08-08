import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { AppContextProvider } from 'src/contexts/AppContexts';

function App() {
  return (
    <div className="App">
      <AppContextProvider>helloworld App</AppContextProvider>
    </div>
  );
}

export default App;
