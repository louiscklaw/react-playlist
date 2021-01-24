import React from "react";
import { Outlet } from "react-router-dom";

import {
  styled,
  Box,
  TextField,
  Button,
  makeStyles,
  Input,
  Grid,
} from "@material-ui/core";

export default function FullScreenLayout() {
  return (
    <>
      <Box>Helloworld FullScreenLayout</Box>
      <Outlet />
    </>
  );
}
