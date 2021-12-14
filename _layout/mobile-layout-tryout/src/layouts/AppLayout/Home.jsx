import React, { useContext, useEffect, useRef, useState, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import { useTranslation } from 'react-i18next';

export default ({}) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Root className={classes.root} square elevation={0}>
        <Typography component="h1" style={visuallyHidden}>{`${t(
          'Dashboard'
        )} - ${t('AppTitle')}`}</Typography>
        <Typography component="h2" style={visuallyHidden}>
          {t('home-page-description')}
        </Typography>
        <List disablePadding></List>
        TestBody
      </Root>
    </>
  );
};

const PREFIX = 'home';

const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled(Paper)(({ theme }) => ({
  [`&.${classes.root}`]: {
    background:
      theme.palette.mode === 'dark'
        ? theme.palette.background.default
        : 'white',
    height: 'calc(100vh - 125px)',
    overflowY: 'scroll',
    textAlign: 'center',
  },
}));
