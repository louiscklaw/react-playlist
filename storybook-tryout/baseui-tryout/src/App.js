import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Input } from 'baseui/input';

const engine = new Styletron();

function App({ test_branch = false }) {
  let helloworld = 'helloworld';
  let helloanotherworld = '123';
  let [value, setValue] = React.useState('helloworld');

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
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            helloworld
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Controlled Input"
              clearOnEscape
            />
          </BaseProvider>
        </StyletronProvider>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
