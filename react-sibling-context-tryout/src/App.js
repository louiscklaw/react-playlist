import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';

import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import HelloworldComponent from 'src/components/HelloworldComponent';

import useHello2Test from 'src/hooks/useHello2Test';

import OuterComponent from './components/OuterComponent';

function App({ test_branch = false }) {
  let helloworld = 'helloworld';
  let helloanotherworld = '123';

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
        <HelloworldComponent />
        <OuterComponent />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
