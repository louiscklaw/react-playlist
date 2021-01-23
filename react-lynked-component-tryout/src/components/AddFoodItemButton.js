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
  LYNKED_WHITE,
  LYNKED_GREEN,
  LYNKED_LIGHT_GREY,
  LYNKED_DEEP_GREY,
  LYNKED_BLUE,
  LYNKED_RED_HOVER,
} from "src/consts/colors";

const useStyles = makeStyles((theme) => ({
  helloworld: {},
  AddCategoryButton: {
    padding: "1rem 2rem",
    backgroundColor: LYNKED_RED,
    color: LYNKED_WHITE,
    boxShadow: "0px 1px 2px #00000029",
    "&:hover": {
      backgroundColor: LYNKED_RED_HOVER,
    },
  },
}));

export default function AddFoodItemButton() {
  const classes = useStyles();
  return (
    <>
      <Button
        className={classes.AddCategoryButton}
        startIcon={<AddCircleOutlineIcon />}
      >
        商品を追加
      </Button>
    </>
  );
}
