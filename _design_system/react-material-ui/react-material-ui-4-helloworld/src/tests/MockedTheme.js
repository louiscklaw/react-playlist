import * as React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';

export const MockedTheme: React.FunctionComponent<{ theme?: Theme }> = ({
  children,
  theme,
}) => (
  <MuiThemeProvider theme={createTheme(theme)}>{children}</MuiThemeProvider>
);
