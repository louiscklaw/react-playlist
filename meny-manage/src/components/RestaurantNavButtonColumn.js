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

const ENV_PUBLIC_URL = process.env.PUBLIC_URL;

export default function RestaurantNavButtonColumn() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.TopNavBody}>
        <Box className={classes.NavButtonGroup}>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Overview"}
              href={`/app/overview`}
              icon={<DashboardOutlinedIcon />}
            />
          </Box>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Reception List"}
              href={`/app/reception_list`}
              icon={<FeaturedPlayListOutlinedIcon />}
            />
          </Box>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Help Requests"}
              href={`/app/help_requests`}
              icon={<NotificationsNoneIcon />}
            />
          </Box>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Orders"}
              href={`/app/orders`}
              icon={<FormatListBulletedOutlinedIcon />}
            />
          </Box>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Billing Management"}
              href={`/app/billing_management`}
              icon={<AttachMoneyOutlinedIcon />}
            />
          </Box>
          <Box className={classes.NavButtonContainer}>
            <NavButton
              text={"Menu Management"}
              href={`/app/menu_management`}
              icon={<LiveHelpOutlinedIcon />}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
