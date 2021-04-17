import React from 'react';
import { LYNKED_RED, LYNKED_WHITE, LYNKED_GREEN } from 'src/consts/colors';
import { styled, Box, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  boxWrapper: {
    width: '200px',
    height: '76px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: '2px',
    opacity: 1,

    // display: 'flex',
    // flexFlow: 'row',
    // justifyContent: 'space-between',
    padding: '5px 10px',
  },
  topContent: {
    height: '33%',
    width: '100%',
    padding: '0px 10px',

    display: 'inline-flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottom: '1px solid #E0E0E0',
  },
  dayString: {
    textAlign: 'left',
    font: 'normal normal normal 8px/24px Hiragino Sans',
    letterSpacing: '0px',
    color: '#525252',
    opacity: 1,
  },
  seatString: {
    textAlign: 'left',
    font: 'normal normal normal 8px/24px Hiragino Sans',
    letterSpacing: '0px',
    color: '#525252',

    opacity: 1,
  },
  bottomContent: {
    height: '67%',

    padding: '0px 10px',
    display: 'inline-flex',
    alignItems: 'center',
    font: 'normal normal normal 12px/18px Hiragino Sans',
  },
}));

export default function ReservationRequestCard() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.boxWrapper}>
        <Box className={classes.topContent}>
          <Box className={classes.dayString}>2020年12月8日 5時27分</Box>
          <Box className={classes.seatString}>予約番号 01</Box>
        </Box>
        <Box className={classes.bottomContent}>佐藤 様　大人 2 / 子供 2</Box>
      </Box>
    </>
  );
}
