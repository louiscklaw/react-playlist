import React from 'react';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

import { createTheme } from 'baseui';

const primitives = {
  accent: '#F127E4', // hot pink
  accent50: '#FDEDFC',
  accent100: '#FCD3F9',
  accent200: '#F89FF3',
  accent300: '#F45AEA',
  accent400: '#F127E4',
  accent500: '#B71DAD',
  accent600: '#901788',
  accent700: '#600F5B',
};

const theme = createTheme(primitives);

const engine = new Styletron();

export default ({ children }) => {
  return (
    <>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>{children}</BaseProvider>
      </StyletronProvider>
    </>
  );
};
