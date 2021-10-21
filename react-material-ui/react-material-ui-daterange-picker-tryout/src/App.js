import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ProTip from './ProTip';
import { DateRangePicker, DateRange } from "materialui-daterange-picker";

import moment from 'moment'


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

export defaul1t function App() {
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});

  const toggle = () => setOpen(!open);

  const handleDateRangeOnChange =(range)=>{
    console.log('handleDateRangeOnChange', 'range', range)
    console.log('handleDateRangeOnChange', 'range.endDate.toUTCString()', range.endDate.valueOf())
    setDateRange(range)
    console.log('handleDateRangeOnChange','new Date', new Date(range.endDate.valueOf()))
  }

  const click_helloworld =()=>{
    console.log(moment().toDate())
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-alpha example
        </Typography>
        <Button onClick={toggle} >helloworld date range picker</Button>

        <ProTip />
        <Copyright />
      </Box>

    </Container>
  );
}
