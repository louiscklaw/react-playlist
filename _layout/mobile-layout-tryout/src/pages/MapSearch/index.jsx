import React, { useMemo } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import SearchMap from '../components/route-search/SearchMap';

import Container from '@mui/material/Container';
import { styled, createTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';
import setSeoHeader from 'src/utils/setSeoHeader';

const SearchMap = () => {
  return <>SearchMap</>;
};

export default ({ children }) => {
  let colorMode = 'light';
  let { init_expand } = useParams();

  const [expanded, setExpanded] = React.useState(init_expand || false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const theme = useMemo(() => {
    return createTheme(getThemeTokens(colorMode), [colorMode]);
  }, [colorMode]);

  setSeoHeader({
    title: 'Hello World',
    description: 'helloworld description',
    lang: 'zh',
  });

  return (
    <>
      <AppContainer maxWidth="xs" disableGutters className={classes.container}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          Map search
          <SearchMap />
        </div>
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
