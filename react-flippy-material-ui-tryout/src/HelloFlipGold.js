import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

// import HelloworldCard from '../../../src/components/HelloworldCard'
import HelloworldCard from './HelloworldCard'

import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function HelloFlipGold({
  id_front,
  id_back_side,
  is_flipped,
  flipForward,
  flipBackward
}) {

  let [query_id_back, setQueryIdBack] = React.useState(`#${id_back_side}`)
  let [query_id_front, setQueryIdFront] = React.useState(`#${id_front}`)
  // let [query_id_container, setQueryIdContainer] = React.useState(`#${id_container}`)
  // let [local_flip_enabled, setLocalFlipEnabled] = React.useState(flip_enabled)


  const updatePos = (id_b, id_f) => {
    var e_f=document.querySelector(id_f)
    var e_b=document.querySelector(id_b)

    var r_f = e_f.getBoundingClientRect();
    console.log(`${0-r_f.top}px`)
    e_b.style.top=`${0-r_f.top}px`
    e_b.style.left=`${0-r_f.left}px`

  }

  React.useEffect(()=>{
    document.addEventListener('scroll', (e)=>{
      updatePos(query_id_back, query_id_front)
    })
    document.addEventListener('resize', (e)=>{
      updatePos(query_id_back, query_id_front)
    })
    updatePos(query_id_back, query_id_front)
  },[])

  return(
    <div >
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width:'5vw', minWidth: '100px', height: '100px' }} /// these are optional style, it is not necessary

        isFlipped={is_flipped}
      >
        <FrontSide
          id={id_front}
          style={{
            backgroundColor: '#41669d',
          }}
          onClick={(e) => flipForward(e)}
        >
        </FrontSide>
        <BackSide
          id={id_back_side}
          style={{ backgroundColor: 'dimgray'}}

          >
          {/*
            <Button
            id={`${id_front.replace('id_','id_back_')}`}
            onClick={(e)=> flipBackward(e)}
            style={{color: 'white'}} >back</Button>
          */}

          <IconButton
            id={`${id_front.replace('id_','id_back_')}`}
            onClick={(e)=> flipBackward(e)}
            aria-label="back"
            style={{color: 'white'}}
            >
            <ArrowBackIcon />
            Back
          </IconButton>

          <HelloworldCard />


        </BackSide>
      </Flippy>

    </div>
  )
}

export default HelloFlipGold
