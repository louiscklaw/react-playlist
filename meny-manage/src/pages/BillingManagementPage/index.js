import React from "react";

import { Grid, Box } from "@material-ui/core";

import SearchInput from "src/components/SearchInput";
import ViewHistoryButton from "src/components/ViewHistoryButton";
import BillingManagementList from "src/components/BillingManagementList";

export default function BillingManagementPage() {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <SearchInput />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ViewHistoryButton />
        </Grid>
        <Grid item xs={12}>
          <BillingManagementList />
        </Grid>
      </Grid>
    </>
  );
}
