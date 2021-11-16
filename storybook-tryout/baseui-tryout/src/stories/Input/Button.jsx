import React from 'react';
import PropTypes from 'prop-types';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Button } from 'baseui/button';

const engine = new Styletron();

export const BaseUiButton = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const [value, setValue] = React.useState('Hello');
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Button onClick={() => alert('click')}>Hello</Button>
      </BaseProvider>
    </StyletronProvider>
  );
};
