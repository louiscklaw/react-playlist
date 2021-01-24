import React from "react";

import { Box } from "@material-ui/core";

import ReceptionListCard from "src/components/ReceptionListCard";

export default function Helloworld() {
  return (
    <>
      <Box>Reception List</Box>
      <Box>
        {[1, 2, 3, 4, 5].map((x) => {
          return <ReceptionListCard />;
        })}
      </Box>
    </>
  );
}
