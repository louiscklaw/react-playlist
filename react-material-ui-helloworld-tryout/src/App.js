import React from 'react';
import { Button, Container, Box } from '@material-ui/core/';

import ExampleTimeTable from 'src/components/TimePickers/TimeTable';

import { LYNKED_WHITE, LYNKED_GREEN } from 'src/consts/colors';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <ExampleTimeTable />

        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button
            type="submit"
            style={{ backgroundColor: LYNKED_GREEN, color: LYNKED_WHITE }}
          >
            {`保存する`}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
