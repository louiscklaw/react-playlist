import React from "react";
import { styled, Box, TextField, Button, makeStyles } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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
  ReceptionListCardWrapper: {
    width: "491px",
    height: "126px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 1px 2px #00000029",
    borderRadius: "2px",
    opacity: 1,

    display: "flex",
    flexFlow: "row",

    font: "normal normal normal 14px/18px Hiragino Sans",
    "&:hover": {
      backgroundColor: LYNKED_WHITE_HOVER,
    },
    marginTop: "1rem",
  },
  statusIndicator: {
    width: "10px",
    height: "100%",
    backgroundColor: LYNKED_BLUE,
    borderRadius: "2px 0px 0px 2px",
  },
  CardContent: {
    width: "100%",
    padding: "10px",
    display: "flex",
    flexFlow: "column",
  },
  ReceptionCardHeader: {
    borderBottom: "1px solid #E0E0E0",
    padding: "3px 10px",
    display: "flex",
    flexFlow: "row",
    justifyContent: "flex-start",
  },

  ReceptionCardBody: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "flex-start",
    padding: "10px 10px",
  },
  HeaderContent: {},
  ReceptionCardLeft0: {
    width: "90%",
    textAlign: "left",
  },
  ReceptionCardLeft1: {
    width: "10%",
  },

  Remarks: {
    font: "normal normal normal 12px/18px Hiragino Sans",
    paddingRight: "5px",
  },
  ReceptionCardBody0: {
    font: "normal normal normal 10px/24px Hiragino Sans",
    color: "#525252",
    lineHeight: "150%",
    textAlign: "left",
    width: "30%",
  },
  ReceptionCardBody1: {
    font: "normal normal normal 12px/18px Hiragino Sans",
    textAlign: "left",
    width: "50%",
  },
  ReceptionCardBody2: {},
}));

export default function Helloworld() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.ReceptionListCardWrapper}>
        <Box className={classes.statusIndicator}></Box>
        <Button style={{ width: "100%", height: "100%" }}>
          <Box className={classes.CardContent}>
            <Box className={classes.ReceptionCardHeader}>
              <Box className={classes.ReceptionCardLeft0}>
                佐藤 様　大人 2 / 子供 2
              </Box>
              <Box>
                <MoreHorizIcon />
              </Box>
            </Box>
            <Box className={classes.ReceptionCardBody}>
              <Box className={classes.ReceptionCardBody0}>
                <Box>
                  2020年12月8日 5時27分
                  <br />
                  予約番号 01
                  <br />
                  座席番号 12
                </Box>
              </Box>
              <Box className={classes.Remarks}>備考:</Box>
              <Box className={classes.ReceptionCardBody1}>
                TEST TEST TEST TEST TEST TESTTEST TEST TEST TEST TEST TEST
              </Box>
              <Box className={classes.ReceptionCardBody2}></Box>
            </Box>
          </Box>
        </Button>
      </Box>
    </>
  );
}
