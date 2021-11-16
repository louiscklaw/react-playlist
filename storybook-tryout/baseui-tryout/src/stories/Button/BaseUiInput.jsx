import React from 'react';
import PropTypes from 'prop-types';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Input } from 'baseui/input';

const engine = new Styletron();

export const BaseUiInput = ({
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
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Controlled Input"
          clearOnEscape
        />
      </BaseProvider>
    </StyletronProvider>
  );
};
