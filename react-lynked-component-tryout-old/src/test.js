import React from 'react';
import { LYNKED_RED, LYNKED_WHITE, LYNKED_GREEN } from 'src/consts/colors';
import { styled, Box, TextField, Button, makeStyles } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const COLOR_RED = '#F14342';

const useStyles = makeStyles(theme => ({
  ReceptionListCardWrapper: {
    width: '491px',
    height: '126px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: '2px',
    opacity: 1,

    display: 'flex',
    flexFlow: 'row',
  },
  statusIncidator: {
    borderRadius: '2px 0px 0px 2px',
  },
  CardContent: {
    padding: '10px',
    display: 'flex',
    flexFlow: 'column',
  },
}));

export default function ReceptionListCard() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.ReceptionListCardWrapper}>
        <Box style={{ width: '10px', height: '100%', backgroundColor: COLOR_RED, borderRadius: '2px 0px 0px 2px' }}></Box>

        <Box className={classes.CardContent}>
          <Box style={{ height: '33%' }}>
            <Box>予約番号 01</Box>
            <Box>佐藤 様　大人 2 / 子供 2</Box>
            <Box>
              <MoreHorizIcon />
            </Box>
          </Box>
          <Box style={{ height: '67%' }}>
            <Box>2020年12月8日 5時27分</Box>
            <Box>備考: TEST TEST TEST TEST TEST TESTTEST TEST TEST TEST TEST TEST</Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
}
