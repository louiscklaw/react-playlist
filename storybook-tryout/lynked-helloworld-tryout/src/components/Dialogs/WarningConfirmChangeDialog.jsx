import React from 'react';
import clsx from 'clsx';

import { Button, Dialog, Box, makeStyles, Grid } from '@material-ui/core';

import {
  LYNKED_DEEP_GREY,
  LYNKED_DEEP_GREY_HOVER,
  LYNKED_DANGER,
  LYNKED_DANGER_HOVER,
  LYNKED_PRIMARY,
  LYNKED_PRIMARY_HOVER,
  LYNKED_SECONDARY,
  LYNKED_SECONDARY_HOVER,
  LYNKED_INFO,
  LYNKED_INFO_HOVER,
  LYNKED_SUCCESS,
  LYNKED_SUCCESS_HOVER,
  LYNKED_WARNING,
  LYNKED_WARNING_HOVER,
  LYNKED_MUTED,
  LYNKED_MUTED_HOVER,
  LYNKED_WHITE,
  LYNKED_RED,
  LYNKED_RED_HOVER,
} from 'src/consts/colors';

import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles(() => ({
  ButtonStyle: { padding: '0.75rem', margin: '0.15rem' },
  button_label: { fontSize: '16px', lineHeight: '12px' },

  ConfirmChangeToPrepareWrapper: {
    margin: '30px',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  DialogTitle: {
    paddingBottom: '2rem',
  },
  QuestionsWrapper: {
    textAlign: 'center',
    paddingBottom: '1rem',
  },
  DialogBottom: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',

    width: '100%',
    justifyContent: 'space-between',
  },
  ButtonCancel: {
    width: '48%',
    backgroundColor: LYNKED_DEEP_GREY,
    color: LYNKED_WHITE,
    borderRadius: '1px',
    '&:hover': { backgroundColor: LYNKED_DEEP_GREY_HOVER },
  },
  ButtonOK: {
    width: '48%',
    backgroundColor: LYNKED_RED,
    color: LYNKED_WHITE,
    borderRadius: '1px',
    '&:hover': { backgroundColor: LYNKED_RED_HOVER },
  },
}));
export default function ConfirmChangeToPrepareDialog({
  open,
  handleClose,
  handleConfirmChangeState,
  title,
  body,
  explain,
  cancel_text,
  ok_text,
}) {
  let classes = useStyles();

  return (
    <Dialog
      className={classes.root}
      open={true}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth="xs">
      <Box className={classes.ConfirmChangeToPrepareWrapper}>
        <Box
          style={{
            paddingTop: '1rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}>
          <Box className={classes.DialogTitle} style={{ textAlign: 'center' }}>
            <Box style={{ paddingBottom: '0.5rem' }}>{title}</Box>
          </Box>

          <Box
            className={classes.DialogBody}
            style={{
              textAlign: 'center',
              paddingBottom: '2rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
            }}>
            <Grid container>
              <Grid item xs={12} sm={1}>
                <Box>
                  <WarningIcon fontSize="small" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={11}>
                <Box mb="1rem">{body}</Box>

                <Box className={classes.QuestionsWrapper}>
                  <Box style={{ color: LYNKED_DEEP_GREY, fontSize: 'x-small' }}>
                    {explain}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box className={classes.DialogBottom}>
          <Button onClick={handleClose} className={clsx(classes.ButtonCancel)}>
            {cancel_text}
          </Button>
          <Button
            onClick={handleConfirmChangeState}
            className={clsx(classes.ButtonOK)}>
            {ok_text}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
