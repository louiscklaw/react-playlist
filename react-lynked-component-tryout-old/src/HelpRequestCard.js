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

    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
  },
  rightButton: {
    width: '30%',
    height: '76px',
    background: '#44A048 0% 0% no-repeat padding-box',
    borderRadius: '0px 2px 2px 0px',
    opacity: 1,

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: 'normal normal normal 10px/14px Hiragino Sans',
    letterSpacing: '0px',
    color: '#FFFFFF',
  },
  strings: {
    width: '70%',
    padding: '0 10px',
  },
  dayString: {
    textAlign: 'left',
    font: 'normal normal normal 8px/24px Hiragino Sans',
    letterSpacing: '0px',
    color: '#525252',
    opacity: 1,
    height: '33%',
    paddingLeft: '10px',
    borderBottom: '1px solid #E0E0E0',
  },
  seatString: {
    height: '67%',
    display: 'inline-flex',
    alignItems: 'center',
    paddingLeft: '10px',
  },
}));

export default function HelpRequestCard() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.boxWrapper}>
        <Box className={classes.strings}>
          <Box className={classes.dayString}>2020年12月8日 5時27分</Box>
          <Box className={classes.seatString}>座席番号 10</Box>
        </Box>
        <Box className={classes.rightButton}>完了</Box>
      </Box>
    </>
  );
}
