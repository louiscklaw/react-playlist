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

import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ReservationRequestCard from "src/components/ReservationRequestCard";

const useStyles = makeStyles((theme) => ({
  CardList: {
    height: "100%",
    // backgroundColor: "gold",
    display: "flex",
    flexFlow: "row",
  },
  MoreIconContainer: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ReservationRequestedShortList: {
    padding: "1rem",
  },
}));

export default function ReservationRequestedShortList() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.ReservationRequestedShortList}>
        <Grid container spacing={"0.5rem"}>
          <Grid
            item
            lg={6}
            spacing={"1rem"}
            style={{ display: "flex", flexFlow: "row", alignItems: "center" }}
          >
            <NotificationsActiveIcon />
            Reservation Requested
          </Grid>
          <Grid item lg={6}>
            <Box
              style={{
                width: "100%",
                display: "flex",
                flexFlow: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                // backgroundColor: "red",
              }}
            >
              <Box>see All</Box>{" "}
              <Box>
                <ChevronRightOutlinedIcon />
              </Box>
            </Box>
          </Grid>

          <Grid item lg={12} className={classes.CardList}>
            <Box
              style={{
                width: "100%",
                padding: "0.5rem",
                display: "flex",
                flexFlow: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box style={{ margin: "1rem" }}>
                <ReservationRequestCard />
              </Box>
              <Box style={{ margin: "1rem" }}>
                <ReservationRequestCard />
              </Box>
              <Box style={{ margin: "1rem" }}>
                <ReservationRequestCard />
              </Box>
              <Button className={classes.MoreIconContainer}>
                <ChevronRightOutlinedIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
