import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ProTip from './ProTip';
import { DateRangePicker, DateRange } from "@matharumanpreet00/react-daterange-picker";

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
	const [open, setOpen] = React.useState(false);
	const [dateRange, setDateRange] = React.useState({});


  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-alpha example
        </Typography>
        <ProTip />
        <Copyright />
        <Button onClick={(e)=>setOpen(true)}>Open</Button>
      </Box>
      <Box>
      <DateRangePicker
          open={open}
          onChange={range => setDateRange(range)}
        />

      </Box>
    </Container>
  );
}
