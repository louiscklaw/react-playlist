import React from "react";

import {
  styled,
  Box,
  TextField,
  Button,
  makeStyles,
  Input,
  Grid,
} from "@material-ui/core";

import ProfilePic from "src/components/ProfilePic";
import RestaurantNavButtonColumn from "src/components/RestaurantNavButtonColumn";
import SystemNavButtonColumn from "src/components/SystemNavButtonColumn";
import HelpRequestedShortList from "src/components/HelpRequestedShortList";

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
} from "src/consts/colors";

const useStyles = makeStyles((theme) => ({
  DashboardContainer: { height: "100vh" },
  Topbar: {
    backgroundColor: LYNKED_RED,
    minHeight: "7vh",
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Navbar: {
    width: "16%",
    minHeight: "93vh",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
  },
  TopNavBody: { width: "100%" },
  NavbarTopPart: { backgroundColor: "white" },
  NavbarBottomPart: {},
  NavBody: { backgroundColor: "green", width: "84%" },
  DashboardBody: { display: "flex", flexFlow: "row" },
  ProfilePic: { minHeight: "22vh", backgroundColor: "cyan" },
  NavBodyHead: {
    minHeight: "22vh",
    backgroundColor: LYNKED_BACKGROUND_LIGHT_GREY,
  },
  NavBodyMainRight: {
    backgroundColor: LYNKED_BACKGROUND_LIGHT_GREY,
    height: "71vh",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.DashboardContainer}>
        <Box className={classes.Topbar}>
          <Box>lynked logo</Box>
          <Box>lynked nav buttons</Box>
        </Box>
        <Box className={classes.DashboardBody}>
          <Box className={classes.Navbar}>
            <Box className={classes.NavbarTopPart}>
              <ProfilePic />
              <RestaurantNavButtonColumn />
            </Box>
            <Box className={classes.NavbarBottomPart}>
              <SystemNavButtonColumn />
            </Box>
          </Box>
          <Box className={classes.NavBody}>
            <Box className={classes.NavBodyHead}>
              <Grid container>
                <Grid item lg={6}>
                  <HelpRequestedShortList />
                </Grid>
                <Grid item lg={6}>
                  reservation requested
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.NavBodyMain}>
              <Grid container>
                <Grid item lg={6}>
                  left
                </Grid>
                <Grid item lg={6} className={classes.NavBodyMainRight}>
                  right
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
