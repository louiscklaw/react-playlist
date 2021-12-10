import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

function App() {
  const dumpLocalStorage = () => {
    var archive = {};
    Object.keys(localStorage).forEach((ls_key) => {
      let temp_json = JSON.parse(localStorage.getItem(ls_key));
      archive = { ...archive, ...temp_json };
    });

    console.log('dumpLocalStorage:', archive);
    return archive;
  };

  const TestANewError = () => {
    localStorage.setItem('test', 'test');
    throw new Error('helloworld error');
  };

  return (
    <div className="App">
      <GlobalContextProvider>
        <h1>hello sentry</h1>
        notes to llaw:
        <h1>just press button won't work, need reload and re-press button</h1>
        return <button onClick={TestANewError}>Break the world</button>;
      </GlobalContextProvider>
    </div>
  );
}

export default App;
