import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import Flippy, { FrontSide, BackSide } from 'react-flippy';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

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

class HelloFlip extends Component {
  render() {
    return (
      <>
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '30vw', height: '150px' }} /// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          backgroundColor: '#41669d',
        }}
      >
        RICK
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#175852',
          width: '100vw',
          height: '100vh',
          zIndex: '999999'
        }}

        >
        ROCKS
      </BackSide>
    </Flippy>
      </>
    )
  }
}

class HelloFlipGold extends Component {
  render() {
    return (
      <>
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '30vw', height: '150px' }} /// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          backgroundColor: 'gold',
        }}
        id={'hello-flip-front'}
      >
        RICK
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: 'cyan',
          width: '100vw',
          height: '100vh',
          zIndex: '999999'
        }}
        id={'hello-flip-back'}
        >
        ROCKS
      </BackSide>
    </Flippy>
      </>
    )
  }
}

function CardCluster() {
  return (
      <Box my={4} component="span">
        <HelloFlip />
      </Box>
  );
}

function FullScreenCardCluster(){
  return (
    <Box my={4} component="span">
      <HelloFlip />
    </Box>
);
}


export default function App(){
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        {/* <FullScreenCardCluster /> */}
        <Grid container justify="center" spacing={spacing}>
          {Array(3).fill(0).map((value) => (
            <Grid key={value} item>
              <CardCluster />
            </Grid>
          ))}
          <HelloFlipGold />
          {Array(40).fill(0).map((value) => (
            <Grid key={value} item>
              <CardCluster />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}