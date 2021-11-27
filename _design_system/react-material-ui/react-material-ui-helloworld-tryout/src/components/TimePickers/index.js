import React from 'react';
import { TextField } from '@material-ui/core';

import { useStyles } from './styles';

export default function TimePickers() {
  const classes = useStyles();

  return (
    <>
      <TextField
        id="time"
        // label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={classes.TextInput}
        // inputProps={{ style: { padding: '1rem' } }}
        InputProps={{ disableUnderline: true }}
        variant="standard"
      />
    </>
  );
}
