import React, { useState } from "react";

import {
  Box,
  Container,
  makeStyles,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Alert,
} from "@material-ui/core";

import TestComponent from "./TestComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const HelloworldMenuOrderEdit = () => {
  const classes = useStyles();
  // const [customers] = useState(data);

  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        <TestComponent />
      </Box>
    </Container>
  );
};

export default HelloworldMenuOrderEdit;
