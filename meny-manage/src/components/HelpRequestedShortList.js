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
import HelpRequestCard from "src/components/HelpRequestCard";

const useStyles = makeStyles((theme) => ({
  CardList: {
    height: "100%",
    //
    display: "flex",
    flexFlow: "row",
  },
  MoreIconContainer: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
  HelpRequestedShortList: {
    // padding: "1rem",
  },
  ListUpper: {
    width: "100%",
  },
}));

export default function HelpRequestedShortList() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.HelpRequestedShortList}>
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
                  }}
                >
                  {[1, 2, 3].map((x) => {
                    return <HelpRequestCard />;
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
