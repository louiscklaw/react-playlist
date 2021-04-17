import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import {
  styled,
  Box,
  TextField,
  Button,
  makeStyles,
  Input,
} from "@material-ui/core";

import {
  LYNKED_RED,
  LYNKED_RED_HOVER,
  LYNKED_WHITE,
  LYNKED_BLUE,
  LYNKED_BLUE_HOVER,
  LYNKED_GREEN,
  LYNKED_GREEN_HOVER,
  LYNKED_LIGHT_GREY,
  LYNKED_LIGHT_GREY_HOVER,
  LYNKED_DEEP_GREY,
  LYNKED_DEEP_GREY_HOVER,
  LYNKED_BLACK,
  LYNKED_BLACK_HOVER,
  LYNKED_WHITE_HOVER,
} from "src/consts/colors";

const useStyles = makeStyles((theme) => ({
  helloworld: {},
  DialogBottom: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",

    width: "100%",
    justifyContent: "space-between",
  },
  ConfirmDeleteDialogWrapper: {
    margin: "30px",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  DialogTitle: {
    paddingBottom: "2rem",
  },
  QuestionsWrapper: {
    textAlign: "center",
    paddingBottom: "3rem",
  },
  FooterButtonsGroup: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  FooterButtons: {
    width: "48%",
  },
  ButtonCancel: {
    width: "48%",
    backgroundColor: LYNKED_DEEP_GREY,
    "&:hover": {
      backgroundColor: LYNKED_DEEP_GREY_HOVER,
    },
    color: LYNKED_WHITE,
    borderRadius: "1px",
  },
  ButtonOK: {
    width: "48%",
    backgroundColor: LYNKED_GREEN,
    "&:hover": {
      backgroundColor: LYNKED_GREEN_HOVER,
    },
    color: LYNKED_WHITE,
    borderRadius: "1px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDeleteDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        ConfirmDeleteDialog
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Box className={classes.ConfirmDeleteDialogWrapper}>
          <Box className={classes.DialogTitle}>
            <Box>Delete</Box>
          </Box>
          <Box className={classes.QuestionsWrapper}>
            <Box>Are you sure do you want delete this item ?</Box>
          </Box>

          <Box className={classes.DialogBottom}>
            <Button className={`${classes.Buttons} ${classes.ButtonCancel}`}>
              {"キャンセル"}
            </Button>
            <Button className={`${classes.Buttons} ${classes.ButtonOK}`}>
              {"確定"}
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
