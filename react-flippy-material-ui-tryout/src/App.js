import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import HelloFlipGold from './HelloFlipGold'
import HelloFlip from './HelloFlip'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

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

export default function App(){
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const n_a = [0,1]
  const default_flip = {}
  n_a.forEach(x => default_flip[`id_${x}`]=false)
  // const [is_flipped, setIsFlipped] = React.useState({
  //   id_0: false,
  //   id_1: false,
  //   id_2: false,
  //   id_3: false,
  //   id_4: false,
  //   id_5: false,
  //   id_6: false,
  //   id_7: false,
  // })
  const [is_flipped, setIsFlipped] = React.useState([false,false,false,false,false,false,false,false])
  const [flipped_card, setFlippedCard] = React.useState('')
  const testHelloworld = () => {
    setIsFlipped([false,false])
  }

  const goFlip = (e) => {
    let this_id = e.target.id
    let new_d = {}
    new_d[this_id] = true
    // setIsFlipped({
    //   id_0: false,
    //   id_1: false,
    //   id_2: false,
    //   id_3: false,
    //   id_4: false,
    //   id_5: false,
    //   id_6: false,
    //   id_7: false,
    //   ...new_d})

    let new_is_flipped=[false,false,false,false,false,false,false,false]
    new_is_flipped[this_id.split('_')[1]]=true

    setIsFlipped([...new_is_flipped])

  }

  const goFlipBack = (e) => {
    console.log(e.target)
    let this_back_id = e.target.id
    let this_id = this_back_id.replace('id_back_','id_')
    let new_d = {}
    new_d[this_id] = false
    console.log(this_id)
    setIsFlipped({...is_flipped, ...new_d})
  }

  React.useEffect(()=>{
    console.log(is_flipped)
  },[is_flipped])

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        {/* <FullScreenCardCluster /> */}
        <Grid container justify="center" spacing={spacing}>
          {Array(8).fill(0).map((value, idx) =>
            {
              return (
                <Grid key={idx} item>
                  <HelloFlipGold
                    my_id={`id_${idx}`}
                    flipForward={goFlip}
                    flipBackward={goFlipBack}
                    is_flipped={is_flipped[idx]}
                  />
                </Grid>
              )
            }
          )}
        </Grid>
      </Grid>
      <Button onClick={testHelloworld}>test helloworld</Button>
    </Grid>
  )
}