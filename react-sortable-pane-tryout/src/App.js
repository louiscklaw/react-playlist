import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import SimpleUncontrolledExample from 'src/components/SimpleUncontrolledExample';

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
        {/* https://github.com/bokuweb/react-sortable-pane */}
        https://github.com/bokuweb/react-sortable-pane
        <SimpleUncontrolledExample />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
