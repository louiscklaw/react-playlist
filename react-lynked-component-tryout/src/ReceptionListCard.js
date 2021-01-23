import React from "react";
import { LYNKED_RED, LYNKED_WHITE, LYNKED_GREEN } from "src/consts/colors";
import { styled, Box, TextField, Button, makeStyles } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const COLOR_RED = "#F14342";

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
  },
  statusIncidator: {
    borderRadius: "2px 0px 0px 2px",
  },
  CardContent: {
    padding: "10px",
    display: "flex",
    flexFlow: "column",
  },
  ReceptionCardHeader: {
    height: "33%",
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },

  ReceptionCardBody: {
    height: "67%",
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },

  ReceptionCardLeft0: {
    width: "30%",
  },
  ReceptionCardLeft1: {
    width: "60%",
  },
  ReceptionCardLeft2: {
    width: "10%",
  },

  ReceptionCardBody0: {
    width: "30%",
    font: "normal normal normal 10px/24px Hiragino Sans",
    color: "#525252",
  },
  ReceptionCardBody1: {
    font: "normal normal normal 12px/18px Hiragino Sans",
    width: "60%",
  },
  ReceptionCardBody2: {
    width: "10%",
  },
}));

export default function Helloworld() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.ReceptionListCardWrapper}>
        <Box
          style={{
            width: "10px",
            height: "100%",
            backgroundColor: COLOR_RED,
            borderRadius: "2px 0px 0px 2px",
          }}
        ></Box>

        <Box className={classes.CardContent}>
          <Box className={classes.ReceptionCardHeader}>
            <Box className={classes.ReceptionCardLeft0}>予約番号 01</Box>
            <Box className={classes.ReceptionCardLeft1}>
              佐藤 様　大人 2 / 子供 2
            </Box>
            <Box className={classes.ReceptionCardLeft2}>
              <MoreHorizIcon />
            </Box>
          </Box>
          <Box className={classes.ReceptionCardBody}>
            <Box className={classes.ReceptionCardBody0}>
              2020年12月8日 5時27分
            </Box>
            <Box className={classes.ReceptionCardBody1}>
              備考: TEST TEST TEST TEST TEST TESTTEST TEST TEST TEST TEST TEST
            </Box>
            <Box className={classes.ReceptionCardBody2}></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
