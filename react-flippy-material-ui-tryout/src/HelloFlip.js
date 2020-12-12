import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Flippy, { FrontSide, BackSide } from 'react-flippy';


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
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

export default HelloFlip
