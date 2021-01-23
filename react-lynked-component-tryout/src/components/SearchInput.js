import React from "react";

import { styled, Box, TextField, Button, makeStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

import AccountCircle from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";

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
  SearchInput: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    boxShadow: "0px 1px 2px #00000029",
    width: "500px",
    height: "45px",
  },
  TextInput: {
    width: "450px",
    height: "100%",
    padding: "10px",
    font: "normal normal bold 12px/16px Roboto",
    "& ::placeholder": {
      color: LYNKED_LIGHT_GREY,
    },
  },

  SearchButton: {
    height: "100%",
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

export default function SearchInput() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.SearchInput}>
        <TextField
          className={classes.TextInput}
          placeholder="SEARCH"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          // value="TABLE NUMBER"
        />

        <Button className={classes.SearchButton}>{"検索する"}</Button>
      </Box>
    </>
  );
}
