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
  helloworld: { height: "100vh" },
  ProfilePicCell: {
    minHeight: "22vh",
    backgroundColor: LYNKED_WHITE,
    textAlign: "center",
  },
  ProfilePicContainer: {
    height: "15vh",
    width: "100%",
  },
  ProfilePic: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  ProfileEmail: {
    paddingTop: "0.5rem",
  },
  ProfileRestaurantName: {
    paddingTop: "0.5rem",
  },
}));

export default function ProfilePic() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.ProfilePicCell}>
        <Box>
          <Box className={classes.ProfilePicContainer}>
            <div
              className={classes.ProfilePic}
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)`,
              }}
            ></div>
          </Box>
        </Box>
        <Box className={classes.ProfileRestaurantName}>
          {"blablablabla restaurant"}
        </Box>
        <Box className={classes.ProfileEmail}>
          {"blablablabla@lynked.co.jp"}
        </Box>
      </Box>
    </>
  );
}
