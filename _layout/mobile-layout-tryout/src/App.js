import React, { useMemo } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import { useRouteMatch, Switch, Route } from 'react-router-dom';

import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  styled,
} from '@mui/material/styles';

// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import HelloworldPage from './pages/Helloworld';
import HelloworldPage1 from './pages/Helloworld1';
import HelloworldPage2 from './pages/Helloworld2';
import AppLayout from './layouts/AppLayout';

import setSeoHeader from './utils/setSeoHeader';

function App({ test_branch = false }) {
  let colorMode = 'light';
  const theme = useMemo(() => {
    return createTheme(getThemeTokens(colorMode), [colorMode]);
  }, [colorMode]);

  const { path } = useRouteMatch();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer
          maxWidth="xs"
          disableGutters
          className={classes.container}>
          {/* <AppLayout> */}
          {/* <HelloworldPage /> */}
          <Switch>
            {/* <Route path={`${path}/helloworld4`} component={HelloworldPage} /> */}
            {/* <Route path={`${path}/helloworld3`} component={HelloworldPage1} /> */}
            <Route path={`/helloworld2`} component={HelloworldPage2} />
            <Route
              path={`/helloworld1/:init_expand`}
              component={HelloworldPage1}
            />
            <Route path={`/helloworld1`} component={HelloworldPage1} />
            {/* <Route path={`/`} component={HelloworldPage1} /> */}
          </Switch>
          {/* </AppLayout> */}
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
          background: { default: '#f1c40f' },
          primary: { main: '#f1c40f' },
        }
      : {
          //dark mode
          primary: { main: '#f1c40f' },
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
