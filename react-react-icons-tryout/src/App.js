import React from 'react';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import { GoCircuitBoard } from 'react-icons/go';

function App({ test_branch = false }) {
  let helloEmpty;

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  console.log('helloEmpty', helloEmpty);

  return (
    <div className="App">
      <GlobalContextProvider>
        https://react-icons.github.io/react-icons/icons?name=go
        <GoCircuitBoard />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
