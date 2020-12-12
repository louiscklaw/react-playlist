import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

let testHelloworld = (f) => {
  f.flippy.toggle()
}

let testBack = (f) => {
  f.flippy.toggle()
}

class HelloFlipGold extends Component {



  render(){
    return(
      <div >
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
        >
          <FrontSide
            style={{
              backgroundColor: '#41669d',
            }}
            onClick={(e) => testHelloworld(this)}
          >
            {/* <Button style={{
              color: 'white',
              width: '100%',
              height: '100%'
              }} ></Button> */}
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#175852'}}>
            <Button style={{color: 'white'}} onClick={(e)=> testBack(this)}>back</Button>

          </BackSide>
        </Flippy>

      </div>
    )
  }

}

export default HelloFlipGold