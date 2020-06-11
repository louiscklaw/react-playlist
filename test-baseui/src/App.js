import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {StatefulInput} from 'baseui/input';
import { Button } from "baseui/button";

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
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Button onClick={() => alert("click")}>Hello</Button>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
    </div>
  );
}

export default App;
