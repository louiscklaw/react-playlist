import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

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

  ViewHistoryButton: {
    height: "45px",
    width: "150px",
    padding: "10px 10px",
    font: "normal normal normal 10px/14px Hiragino Sans",
    borderRadius: "1px",

    color: LYNKED_WHITE,
    backgroundColor: LYNKED_BLUE,
    "&:hover": {
      backgroundColor: LYNKED_BLUE_HOVER,
    },
  },
}));

export default function ViewHistoryButton() {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.ViewHistoryButton}>{"HISTORY"}</Button>
    </>
  );
}
