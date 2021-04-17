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

import HelpRequestsTable from "src/components/HelpRequestsTable";

export default function HelpRequestsPage() {
  return (
    <>
      <Grid container>
        <Grid item lg={12}>
          <HelpRequestsTable />
        </Grid>
      </Grid>
    </>
  );
}
