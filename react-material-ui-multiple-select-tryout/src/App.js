import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

import {
  Grid,
  TextField
} from '@material-ui/core';



// import TestMultipleSelect from './TestMultipleSelect'
import FoodCategorySelect from './components/selects/FoodCategorySelect'

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
  return (
    <Container maxWidth="sm">
        <Grid container spacing={1} >
          {/* {JSON.stringify(food_detail, null, 2)} */}
          <Grid item md={6} sm={12}>
            <Box style={{display:'flex', flexFlow:'column'}}>
                <Box m="0.5rem" >
                  <TextField
                    fullWidth
                    label={`active_lang.FOOD_NAME`}
                    name='name'
                    onInput={`handleChange`}
                    required
                    value={`update_food_detail.name`}
                    variant="outlined"
                    style={{width: '100%'}}
                  />
                </Box>

              <Box m="0.5rem" >
                <FoodCategorySelect />
              </Box>
            </Box>
          </Grid>
        </Grid>

      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-alpha example 123321
        </Typography>
        <ProTip />
        <Copyright />
      </Box>

    </Container>
  );
}
