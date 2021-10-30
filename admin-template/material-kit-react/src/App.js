import React from 'react';
// import { useTranslation } from 'react-i18next';

import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';

import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';

const Loader = () => <>Loader</>;

const App = () => {
  // const { t } = useTranslation();
  const content = useRoutes(routes);

  return (
    <React.Suspense fallback={<Loader />}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {content}
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Suspense>
  );
};

export default App;
