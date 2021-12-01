import React from 'react';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

import TestDataGrid from './TestDataGrid';

import Example from './components/Example';

export default function App() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12}>
          <Example />
        </Grid>
      </Grid>
    </Container>
  );
}
