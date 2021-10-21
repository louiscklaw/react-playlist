import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

import { SnackbarProvider, useSnackbar } from 'notistack';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love hooks');
  }
  return (
    <>

        <Container maxWidth="sm">

          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App v5-alpha example
            </Typography>
            <ProTip />
            <Copyright />

            <Button onClick={handleClick}>Show snackbar</Button>
          </Box>
        </Container>

    </>
  );
}
