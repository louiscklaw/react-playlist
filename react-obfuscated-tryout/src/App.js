import React from 'react';
import Obfuscate from 'react-obfuscate';

// import HelloComponent from 'src/components/HelloComponent';
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
        {/* <HelloComponent /> */}
        hellocomponents
        {helloanotherworld}
        {JSON.stringify(helloEmpty, null, 2)}
        <p>
          Phone: <Obfuscate tel="205-454-1234" />
          <br />
          Email:{' '}
          <Obfuscate
            email="hello@coston.io"
            headers={{
              cc: 'dade@zero-cool.af',
              bcc: 'smith@machina.net',
              subject: 'react-obfuscate',
              body: 'Down with the machines!',
            }}
          />
        </p>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
