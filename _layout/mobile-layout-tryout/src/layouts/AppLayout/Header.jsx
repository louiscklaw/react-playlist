import React from 'react';
// import { Input, Tabs, Tab, , Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

import { useHistory } from 'react-router-dom';

import { styled } from '@mui/material/styles';

export default ({}) => {
  return (
    <>
      <AppToolbar className={classes.toolbar}>Header</AppToolbar>
    </>
  );
};

const PREFIX = 'header';

const classes = {
  toolbar: `${PREFIX}-toolbar`,
  appTitle: `${PREFIX}-appTitle`,
  searchRouteInput: `${PREFIX}-searchRouteInput`,
  languageTabs: `${PREFIX}-languagetabs`,
  languageTab: `${PREFIX}-languagetab`,
};

const AppToolbar = styled(Toolbar)(({ theme }) => ({
  [`& .${classes.appTitle}`]: {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.main
        : theme.palette.text.primary,
  },
  [`&.${classes.toolbar}`]: {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.background.default
        : theme.palette.primary.main,
    '& a': {
      color: 'black',
      textDecoration: 'none',
    },
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: theme.zIndex.drawer * 2,
  },
  [`& .${classes.searchRouteInput}`]: {
    maxWidth: '50px',
    '& input': {
      textAlign: 'center',
    },
    '& input::before': {
      borderBottom: `1px ${theme.palette.text.primary} solid`,
    },
  },
}));
