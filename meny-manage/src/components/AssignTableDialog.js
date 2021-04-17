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
  LYNKED_GREEN,
  LYNKED_GREEN_HOVER,
  LYNKED_LIGHT_GREY,
  LYNKED_LIGHT_GREY_HOVER,
  LYNKED_DEEP_GREY,
  LYNKED_DEEP_GREY_HOVER,
  LYNKED_BLACK,
  LYNKED_BLACK_HOVER,
} from "src/consts/colors";

const COLOR_RED = "#F14342";
const COLOR_BLUE = "#3E51B5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  helloworld: {},
  AssignedTAbleDialogWrapper: {
    width: "426px",
    height: "201px",

    display: "flex",
    flexFlow: "row",

    font: "normal normal normal 14px/18px Hiragino Sans",
  },
  statusIndicator: {
    width: "10px",
    height: "100%",
    backgroundColor: LYNKED_RED,
    borderRadius: "2px 0px 0px 2px",
  },
  CardContentWrapper: {
    width: "100%",
    height: "100%",
    display: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  CardContent: {
    //

    margin: "30px 30px",
    "& div": {
      // backgroundColor: "blue",
      margin: "10px 0px",
    },
  },
  InputTextField: {
    background: "#FFFFFF",
    border: "1px solid #B3B3B3",
    borderRadius: "0px",
    opacity: "1",
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
  DialogBottom: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },
  Buttons: {
    width: "172px",
    padding: "10px",
    color: "white",
    font: "normal normal bold 12px/16px Roboto",
    letterSpacing: "0.12px",
  },
  ButtonCancel: {
    backgroundColor: LYNKED_BLACK,
    "&:hover": {
      backgroundColor: LYNKED_BLACK_HOVER,
    },
  },
  ButtonOK: {
    backgroundColor: LYNKED_GREEN,
    "&:hover": {
      backgroundColor: LYNKED_GREEN_HOVER,
    },
  },
}));

export default function AssignTableDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        AssignTableDialog
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Box className={classes.AssignedTAbleDialogWrapper}>
          <Box className={classes.statusIndicator}></Box>
          <Box className={classes.CardContentWrapper}>
            <Box className={classes.CardContent}>
              <Box>佐藤 様　大人 2 / 子供 2</Box>
              <Box>
                <TextField
                  className={classes.TextInput}
                  fullWidth
                  placeholder="TABLE NUMBER"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  // value="TABLE NUMBER"
                />
              </Box>
              <Box className={classes.DialogBottom}>
                <Box>
                  <Button
                    className={`${classes.Buttons} ${classes.ButtonCancel}`}
                  >
                    {"キャンセル"}
                  </Button>
                </Box>
                <Box>
                  <Button className={`${classes.Buttons} ${classes.ButtonOK}`}>
                    {"確定"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
