import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function HelloFlipGold({
  my_id,
  is_flipped,
  flipForward,
  flipBackward
}) {

  return(
    <div >
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary

        isFlipped={is_flipped}
      >
        <FrontSide
          id={my_id}
          style={{
            backgroundColor: '#41669d',
          }}
          onClick={(e) => flipForward(e)}
        >
          {/* <Button style={{
            color: 'white',
            width: '100%',
            height: '100%'
            }} ></Button> */}
            {/* <Button id='blablabla' onClick={(e) => flipForward(e)}>blabal</Button> */}
        </FrontSide>
        <BackSide

          style={{ backgroundColor: '#175852'}}

          >
          <Button
            id={`${my_id.replace('id_','id_back_')}`}
            onClick={(e)=> flipBackward(e)}
            style={{color: 'white'}} >back</Button>

        </BackSide>
      </Flippy>

    </div>
  )
}

export default HelloFlipGold
