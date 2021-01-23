import React from "react";
import { styled, Box, TextField, Button, makeStyles } from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
  boxWrapper: {
    width: "200px",
    height: "76px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 1px 2px #00000029",
    borderRadius: "2px",
    opacity: 1,

    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },

  strings: {
    width: "70%",
    padding: "0 10px",
  },
  dayString: {
    textAlign: "left",
    font: "normal normal normal 8px/24px Hiragino Sans",
    letterSpacing: "0px",
    color: "#525252",
    opacity: 1,
    height: "33%",
    paddingLeft: "10px",
    borderBottom: "1px solid #E0E0E0",
  },
  seatString: {
    height: "67%",
    display: "inline-flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  FinishButton: {
    width: "100%",
    height: "100%",
    backgroundColor: LYNKED_GREEN,
    color: LYNKED_WHITE,
    borderRadius: "1px",
    "&:hover": {
      backgroundColor: LYNKED_GREEN_HOVER,
    },
  },
}));

export default function HelpRequestCard() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.boxWrapper}>
        <Box className={classes.strings}>
          <Box className={classes.dayString}>2020年12月8日 5時27分</Box>
          <Box className={classes.seatString}>座席番号 10</Box>
        </Box>
        <Box className={classes.rightButton}>
          <Button className={classes.FinishButton}>完了</Button>
        </Box>
      </Box>
    </>
  );
}
