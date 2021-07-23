import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import TestDonghnut from './components/donghnut';
import TestBubble from './components/bubble';

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
        {/* <HelloComponent /> */}
        hellocomponents
        {helloanotherworld}
        {JSON.stringify(helloEmpty, null, 2)}
        <TestDonghnut />
        <TestBubble />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
