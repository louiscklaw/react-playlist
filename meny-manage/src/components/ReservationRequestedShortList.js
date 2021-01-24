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
  ListUpper: {
    backgroundColor: "gold",
    width: "100%",
  },
}));

export default function ReservationRequestedShortList() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.ReservationRequestedShortList}>
        <Grid container>
          <Grid item lg={12}>
            <Grid container>
              <Grid item lg={11}>
                <Box
                  style={{
                    display: "flex",
                    flexFlow: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem",
                  }}
                >
                  <Box>
                    <NotificationsActiveIcon />
                    Help requested
                  </Box>
                  <Box>
                    see all
                    <ChevronRightOutlinedIcon />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={1}></Grid>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <Grid container>
              <Grid item lg={11}>
                <Box
                  style={{
                    display: "flex",
                    flexFlow: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem",
                  }}
                >
                  {[1, 2, 3].map((x) => {
                    return <ReservationRequestCard />;
                  })}
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ChevronRightOutlinedIcon />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
