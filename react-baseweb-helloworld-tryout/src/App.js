import React from 'react';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, DarkTheme, BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

import ExampleButton from 'src/components/ExampleButton';

import { theme } from 'src/themes/index';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

function App() {
  return (
    <div className="App">
      <div style={{ height: '100%', width: '100%' }}>
        <StyletronProvider value={engine}>
          <BaseProvider theme={theme}>
            <Centered>
              <StatefulInput />
            </Centered>
            <div>
              <ExampleButton />
            </div>
          </BaseProvider>
        </StyletronProvider>
      </div>
    </div>
  );
}

export default App;
