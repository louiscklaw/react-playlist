import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { AppContextProvider } from 'src/contexts/AppContexts';

function App({ test_branch = false }) {
  let helloanotherworld = '123';

  if (test_branch) {
    console.debug('find true');
  } else {
    console.debug('find false');
  }

  return (
    <div className="App">
      <AppContextProvider>{helloanotherworld}</AppContextProvider>
    </div>
  );
}

export default App;
