import React from "react";

import { Box } from "@material-ui/core";

import ReceptionListCard from "src/components/ReceptionListCard";

export default function ReceptionList() {
  return (
    <>
      <Box>Reception List</Box>
      <Box>
        {[1, 2, 3].map((x) => {
          return <ReceptionListCard />;
        })}
      </Box>
    </>
  );
}
