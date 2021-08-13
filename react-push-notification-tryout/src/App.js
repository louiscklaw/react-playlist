import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import { Notifications } from 'react-push-notification';
import Page from 'src/Page';

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
    <div className="app">
      <Notifications />
      <div className="row">
        <div className="content">Hello world.</div>
      </div>

      <Page />
    </div>
  );
}

export default App;
