import React from 'react';

import ExampleDualListbox from 'src/components/ExampleDualListbox';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

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
        helloworld react
        <ExampleDualListbox />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
