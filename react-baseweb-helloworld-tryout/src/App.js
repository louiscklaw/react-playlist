import React from 'react';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

import ExampleButton from 'src/components/ExampleButton';
import ExampleOKButton from 'src/components/ExampleOKButton';
import ExampleStarRating from 'src/components/ExampleStarRating';
import ExampleEmoticonsRating from 'src/components/ExampleEmoticonsRating';

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
              <div style={{ margin: '3rem' }}>
                <StatefulInput placeholder="StatefulInput" />
              </div>
              <div style={{ margin: '3rem' }}>
                <ExampleButton />
              </div>
              <div style={{ margin: '3rem' }}>
                <ExampleOKButton />
              </div>
            </Centered>
            <Centered>
              <div style={{ margin: '3rem' }}>
                <ExampleStarRating />
              </div>
              <div style={{ margin: '3rem' }}>
                <ExampleEmoticonsRating />
              </div>
            </Centered>
          </BaseProvider>
        </StyletronProvider>
      </div>
    </div>
  );
}

export default App;
