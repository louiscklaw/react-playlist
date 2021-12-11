import React from 'react';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

const engine = new Styletron();

export default ({ children }) => {
  return (
    <>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>{children}</BaseProvider>
      </StyletronProvider>
    </>
  );
};
