import React from "react";
import { Box } from "@material-ui/core";

import AssignedTableListCard from "src/components/AssignedTableListCard";

export default function AssignedTablesList() {
  return (
    <>
      <Box>AssignedTablesList</Box>
      <Box>
        {[1, 2, 3].map((x) => {
          return <AssignedTableListCard />;
        })}
      </Box>
    </>
  );
}
