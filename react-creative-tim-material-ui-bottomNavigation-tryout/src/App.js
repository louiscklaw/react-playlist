import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from '@material-ui/core/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import ProTip from './ProTip';
import RestoreIcon from '@material-ui/icons/Restore';
import Typography from '@material-ui/core/Typography';

import "assets/scss/material-kit-react.scss?v=1.9.0";

import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function App(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>

        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          // className={classes.root}
          style={{
            position:"fixed",
            left:"0px",
            bottom: "0px",
            width:"100vw",
            zIndex: "2147483647"
          }}
        >
          <BottomNavigationAction label="Recents" icon={<MenuBookTwoToneIcon />} />
          <BottomNavigationAction label="Recents" icon={<ShoppingCartTwoToneIcon />} />
          <BottomNavigationAction label="Favorites" icon={<ReceiptTwoToneIcon />} />
          <BottomNavigationAction label="Nearby" icon={<EmojiPeopleTwoToneIcon />} />

        </BottomNavigation>

      <Router history={hist}>
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/" component={Components} />
        </Switch>

      </Router>

      </>
  )
}