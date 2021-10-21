import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from '@material-ui/core/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ProTip from './ProTip';
import React from 'react';
import RestoreIcon from '@material-ui/icons/Restore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});


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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-alpha example
        </Typography>
        <ProTip />

      </Box>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        // className={classes.root}
        style={{position:"fixed",left:"0px",bottom: "0px", width:"100vw"}}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>

    </Container>
  );
}
