import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

import {
  styled,
  Box,
  TextField,
  Button,
  makeStyles,
  Input,
  Grid,
} from "@material-ui/core";

import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

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
  LYNKED_BACKGROUND_LIGHT_GREY,
  LYNKED_NAV_HIGHLIGHT,
} from "src/consts/colors";

const useStyles = makeStyles((theme) => ({
  helloworld: { backgroundColor: "gold", height: "100vh" },
  NavButtonGroup: { paddingTop: "1rem" },
  ButtonContent: {
    width: "100%",
    display: "flex",
    flexFlow: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  NavButton: {
    "&:hover": {
      backgroundColor: LYNKED_NAV_HIGHLIGHT,
    },
    "&:selected": {
      backgroundColor: "blue",
    },
  },
}));

export default function NavButton({ text, href, icon }) {
  const classes = useStyles();
  console.log("href", href);
  return (
    <>
      <Button
        className={classes.NavButton}
        fullWidth
        component={RouterLink}
        to={href}
      >
        <Box className={classes.ButtonContent}>
          <Box style={{ paddingLeft: "2rem" }} component="span">
            {icon}
          </Box>
          <Box style={{ paddingLeft: "0.5rem" }} component="span">
            {text}
          </Box>
        </Box>
      </Button>
    </>
  );
}
