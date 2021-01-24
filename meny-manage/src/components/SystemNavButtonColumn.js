import React from "react";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";

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
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";

import NavButton from "src/components/NavButton";

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
  helloworld: { backgroundColor: "gold", height: "100vh" },
  NavButtonGroup: { paddingTop: "1rem" },
  ButtonContent: {
    width: "100%",
    display: "flex",
    flexFlow: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

export default function SystemNavButtonColumn() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.TopNavBody}>
        <Box className={classes.NavButtonGroup}>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Example Components"}
              href={"/example_components"}
              icon={<CodeOutlinedIcon />}
            />
          </Box>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Helloworld"}
              href={"/helloworld"}
              icon={<CodeOutlinedIcon />}
            />
          </Box>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Settings"}
              href={"/app/settings"}
              icon={<SettingsOutlinedIcon />}
            />
          </Box>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Logout"}
              href={"/logout"}
              icon={<ExitToAppOutlinedIcon />}
            />
          </Box>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"ChangeLog"}
              href={"/app/changelog"}
              icon={<EventNoteOutlinedIcon />}
            />
          </Box>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Aboutme"}
              href={"/app/aboutme"}
              icon={<HelpOutlineOutlinedIcon />}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
