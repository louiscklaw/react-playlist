import React from "react";

import { Grid, Box } from "@material-ui/core";

import SearchInput from "src/components/SearchInput";
import ViewHistoryButton from "src/components/ViewHistoryButton";

import FoodMenuEdit from "src/components/FoodMenuEdit";

export default function Helloworld() {
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
          <FoodMenuEdit />
        </Grid>
      </Grid>
    </>
  );
}
