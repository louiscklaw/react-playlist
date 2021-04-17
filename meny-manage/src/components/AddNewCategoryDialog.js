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
  AddCategoryDialogWrapper: {
    margin: "1rem",
  },
  TextInput: {
    border: "1px solid #E0E0E0",
    font: "normal normal bold 12px/16px Roboto",
    "& ::placeholder": {
      color: LYNKED_LIGHT_GREY,
      padding: "10px 20px",
    },
  },
  DialogFooter: {
    width: "100%",

    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },
  DialogBody: {
    padding: "3rem 0px",
  },
  ButtonCancel: {
    width: "48%",
    backgroundColor: LYNKED_DEEP_GREY,
    "&:hover": {
      backgroundColor: LYNKED_DEEP_GREY_HOVER,
    },
    color: LYNKED_WHITE,
  },
  ButtonOK: {
    width: "48%",
    backgroundColor: LYNKED_GREEN,
    "&:hover": {
      backgroundColor: LYNKED_GREEN_HOVER,
    },
    color: LYNKED_WHITE,
  },
  Buttons: {
    width: "100%",
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddNewCategoryDialog() {
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
        AddNewCateogryDialog
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth={"sm"}
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Box className={classes.AddCategoryDialogWrapper}>
          <Box className={classes.DialogTitle}>
            <Box>AddNewCateogryDialog</Box>
          </Box>
          <Box className={classes.DialogBody}>
            <Box className={classes.TextInputGroup}>
              <Box className={classes.TextInputTitle}>カテゴリー名</Box>
              <Box className={classes.TextInputWrapper}>
                <TextField
                  className={classes.TextInput}
                  fullWidth
                  placeholder=""
                  InputProps={{
                    disableUnderline: true,
                  }}
                  // value="TABLE NUMBER"
                />
              </Box>
            </Box>
          </Box>
          <Box className={classes.DialogFooter}>
            <Box className={classes.Buttons}>
              <Button className={classes.ButtonCancel}>
                {"キャンセルする"}
              </Button>
              <Button className={classes.ButtonOK}>{"登録する"}</Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
