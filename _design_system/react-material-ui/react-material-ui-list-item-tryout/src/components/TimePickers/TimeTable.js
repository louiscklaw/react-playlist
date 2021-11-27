import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import WarningIcon from '@material-ui/icons/Warning';
import { useStyles } from './styles';

import TimePickers from 'src/components/TimePickers';

// import { useStyles } from './styles';

function TimeRow({ day_in_week }) {
  const classes = useStyles();

  return (
    <>
      <Grid container item xs={12}>
        <Grid
          item
          xs={4}
          style={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {day_in_week}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TimePickers />
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TimePickers />
        </Grid>
        <Grid item xs={12} className={classes.error_message}>
          <WarningIcon fontSize="small" />
          時間入力エラー (if any, if any, if any, if any)
        </Grid>
      </Grid>
    </>
  );
}

function TableTitle() {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          営業時間
        </Typography>
      </Grid>
    </>
  );
}
function HeaderRow() {
  return (
    <>
      <Grid container item xs={12}>
        <Grid item xs={4}></Grid>
        <Grid
          item
          xs={4}
          style={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            開いた
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            閉まっている
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
export default function TimeTable() {
  // const classes = useStyles();

  return (
    <>
      <Grid
        container
        style={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TableTitle />
        <HeaderRow />
        <TimeRow day_in_week="日" />
        <TimeRow day_in_week="月" />
        <TimeRow day_in_week="火" />
        <TimeRow day_in_week="水" />
        <TimeRow day_in_week="木" />
        <TimeRow day_in_week="金" />
        <TimeRow day_in_week="土" />
      </Grid>
    </>
  );
}
