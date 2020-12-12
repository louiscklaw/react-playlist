import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HelloFlipGold from './HelloFlipGold'
import HelloFlip from './HelloFlip'

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
  let [t_f_enabled, setFEnabled] = React.useState([true,true])

  const change_all_value = (e) => {
    console.log(e.target.id)
    setFEnabled([false, false])
    let this_id = e.target.parentNode.id

    // t_id_array.forEach(t_ref_id => {
    //   if (t_ref_id == this_id){

    //   }else{
    //     document.querySelector(`#${t_ref_id}`).style.visibility='hidden'
    //   }
    // })
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        {/* <FullScreenCardCluster /> */}
        <Grid container justify="center" spacing={spacing}>
          {Array(2).fill(0).map((value, idx) =>
            {
              return (
                <Grid key={value} item>
                  <HelloFlipGold
                    my_id={`id_${idx}`}
                    pressButton={change_all_value}
                    flip_on_click_enabled={t_f_enabled[idx]}
                    />
                </Grid>
              )
            }
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}