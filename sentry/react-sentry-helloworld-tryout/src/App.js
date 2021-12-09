import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

function App() {
  const TestANewError = () => {
    throw new Error('helloworld error');
  };

  return (
    <div className="App">
      <GlobalContextProvider>
        <h1>hello sentry</h1>
        return <button onClick={TestANewError}>Break the world</button>;
      </GlobalContextProvider>
    </div>
  );
}

export default App;
