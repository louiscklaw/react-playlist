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

import HelloworldPage1 from './pages/Helloworld1';
import HelloworldPage2 from './pages/Helloworld2';
import Settings from './pages/Settings';
import Search from './pages/Search';

import Header from './components/Header';
import Footer from './components/Footer';

import AppContextProvider from './AppContext';

const PageSwitch = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      {/* <Route path={`${path}/helloworld4`} component={HelloworldPage} /> */}
      {/* <Route path={`${path}/helloworld3`} component={HelloworldPage1} /> */}
      <Route path={`${path}/settings`} component={Settings} />
      <Route path={`${path}/search`} component={Search} />
      <Route path={`${path}/helloworld2`} component={HelloworldPage2} />
      <Route
        path={`${path}/helloworld1/:init_expand`}
        component={HelloworldPage1}
      />
      <Route path={`${path}/helloworld1`} component={HelloworldPage1} />
      {/* <Route path={`/`} component={HelloworldPage1} /> */}
    </Switch>
  );
};

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          flex: 1,
          backgroundColor: 'white',
          overflowY: 'scroll',
        }}>
        {children}
      </div>
      <Footer />
    </>
  );
};

function App({ test_branch = false }) {
  let colorMode = 'light';
  const theme = useMemo(() => {
    return createTheme(getThemeTokens(colorMode), [colorMode]);
  }, [colorMode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <AppContainer
            maxWidth="xs"
            disableGutters
            className={classes.container}>
            <AppLayout>
              {/* <HelloworldPage /> */}
              <Route path="/:lang">
                <PageSwitch />
              </Route>
            </AppLayout>
          </AppContainer>
        </AppContextProvider>
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
