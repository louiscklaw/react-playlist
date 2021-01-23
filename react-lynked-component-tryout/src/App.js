import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";

// import ReceptionListCard from "./ReceptionListCard";
import AssignTableDialog from "./AssignTableDialog";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <AssignTableDialog />
      </Box>
    </Container>
  );
}
