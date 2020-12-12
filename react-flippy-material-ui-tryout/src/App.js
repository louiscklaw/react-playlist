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
  const flip_count = 20

  const default_flipped = Array(flip_count).fill(false)
  const [is_flipped, setIsFlipped] = React.useState(default_flipped)
  const [flipped_card, setFlippedCard] = React.useState('')
  const testHelloworld = () => {
    setIsFlipped([false,false])
  }

  const goFlip = (e) => {
    let this_id = e.target.id
    let new_d = {}
    new_d[this_id] = true

    let new_is_flipped=default_flipped
    new_is_flipped[this_id.split('_')[1]]=true

    setIsFlipped([...new_is_flipped])

    let this_back_side_id = this_id.replace('id_','id_back_side_')
    enlargeBack(this_back_side_id)
    hideOtherFront(this_back_side_id)
  }

  const hideOtherFront = (this_back_id) => {
    let this_id = this_back_id.replace('id_back_','id_')
    let num = this_id.split('_')[2]
    console.log('hid back side id '+num)

    var eles = document.querySelectorAll('.test-class')
    for (var i=0; i< flip_count;i++){
      if (i == num){

      }else{
        eles[i].style.zIndex='-1'
      }
    }

  }

  const showOtherFront = () =>{
    var eles = document.querySelectorAll('.test-class')
    for (var i=0; i< flip_count;i++){
        eles[i].style.zIndex='unset'
    }

  }

  const goFlipBack = (e) => {
    console.log(e.target)
    let this_back_id = e.target.id
    let this_id = this_back_id.replace('id_back_','id_')
    setIsFlipped(default_flipped)
    showOtherFront()
  }

  const enlargeBack = (id_b) => {
    console.log(id_b)
    var e_b=document.querySelector(`#${id_b}`)
    e_b.style.width="100vw"
    e_b.style.height="100vh"

  }

  React.useEffect(()=>{
    console.log(is_flipped)
  },[is_flipped])

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        {/* <FullScreenCardCluster /> */}
        <Grid container justify="center" spacing={spacing} >
          {Array(flip_count).fill(0).map((value, idx) =>
            {
              return (
                <Grid key={idx} item className="test-class">
                  <HelloFlipGold
                    id_front={`id_${idx}`}
                    id_back_side={`id_back_side_${idx}`}
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