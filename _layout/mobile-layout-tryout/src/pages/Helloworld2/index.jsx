import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import Container from '@mui/material/Container';
import { styled, createTheme } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
// import Home from './Home';
// import TestBody from './TestBody';

export default ({ children }) => {
  let colorMode = 'light';

  const theme = useMemo(() => {
    return createTheme(getThemeTokens(colorMode), [colorMode]);
  }, [colorMode]);

  return (
    <>
      <AppContainer maxWidth="xs" disableGutters className={classes.container}>
        <Header />
        helloworld 2
        <Footer />
      </AppContainer>
    </>
  );
};

const PREFIX = 'app';

const classes = {
  container: `${PREFIX}-container`,
};

const AppContainer = styled(Container)(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
}));

const getThemeTokens = (mode) => ({
  typography: { fontFamily: "'Chiron Sans HK Pro WS', sans-serif" },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // light mode
          background: { default: '#fedb00' },
          primary: { main: '#fedb00' },
        }
      : {
          //dark mode
          primary: { main: '#fedb00' },
          background: { default: '#000' },
        }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { userSelect: 'none' },
        body: {
          fontSize: '0.875rem',
          lineHeight: 1.43,
        },
      },
    },
  },
});
