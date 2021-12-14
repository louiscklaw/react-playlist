import React, { useMemo } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  styled,
} from '@mui/material/styles';

// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import HelloworldPage from './pages/Helloworld';
import AppLayout from './layouts/AppLayout';

function App({ test_branch = false }) {
  let colorMode = 'light';
  const theme = useMemo(() => {
    return createTheme(getThemeTokens(colorMode), [colorMode]);
  }, [colorMode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer
          maxWidth="xs"
          disableGutters
          className={classes.container}>
          <AppLayout>
            <HelloworldPage />
          </AppLayout>
        </AppContainer>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

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
          background: { default: '#e67e22' },
          primary: { main: '#e67e22' },
        }
      : {
          //dark mode
          primary: { main: '#e67e22' },
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
