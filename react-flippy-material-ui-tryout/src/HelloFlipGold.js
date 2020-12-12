import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Flippy, { FrontSide, BackSide } from 'react-flippy';


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class HelloFlipGold extends Component {
  constructor(props){
    super(props)
    // this.flip_ref=React.createRef()
    this.id_back=`id_${getRandomInt(999999)}`
    this.id_front=`id_${getRandomInt(999999)}`
    this.id_container=`id_${getRandomInt(999999)}`
    this.query_id_back=`#${this.id_back}`
    this.query_id_front=`#${this.id_front}`
    this.query_id_container=`#${this.id_container}`
    this.flippy = this.helloworld
    this.test_flip_on_click = props.flip_on_click_enabled
    this.r_filppy_ref=props.ref
    this.all_refs = props.all_refs
    this.my_id = props.my_id
    this.pressButton=props.pressButton
  }

  helloworld = (r) => {
    console.log(r)
  }

  componentDidMount() {
    function updatePos(id_b, id_f) {

      var e_f=document.querySelector(id_f)
      var e_b=document.querySelector(id_b)

      var r_f = e_f.getBoundingClientRect();
      console.log(`${0-r_f.top}px`)
      e_b.style.top=`${0-r_f.top}px`

      e_b.style.left=`${0-r_f.left}px`
    }

    document.addEventListener('scroll', (e)=>{
      updatePos(this.query_id_back, this.query_id_front)
    })

    var eles_f_container = document.querySelectorAll('.flippy-cardContainer')
    eles_f_container.forEach(ele => {
      ele.style.transitionDuration="0s"
    })


    updatePos(this.query_id_back, this.query_id_front)
  }

  hideOthersFront(e){
  //   var this_id = e.target.id
  //   var eles_f_front = document.querySelectorAll('.flippy-front')

  //   eles_f_front.forEach(ele => {
  //     if (ele.id != this_id){
  //       ele.style.transitionDuration='0s'
  //       ele.style.visibility='hidden'
  //     }
  //   })

  //   this.all_refs.forEach(a_ref => {
  //     if (a_ref==this.r_flippy_ref){

  //     }else{
  //       console.log('masking flipOnClick')
  //       console.log(a_ref)
  //     }
  //   })
  }

  showOthersFront(e){
  //   var this_id = e.target.id
  //   var eles_f_front = document.querySelectorAll('.flippy-front')

  //   eles_f_front.forEach(ele => {
  //     if (ele.id != this_id){
  //       ele.style.transitionDuration='0s'
  //       ele.style.visibility='visible'
  //     }
  //   })
  }

  sayHelloworld(){
    alert('helloworld')
  }

  render() {


    return (
      <div id={this.id_container} className='hello-flip-container' >
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={this.test_flip_on_click} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          style={{
            width: '30vw',
            height: '150px',

          }} /// these are optional style, it is not necessary
          ref={this.r_filppy_ref}
          id={this.my_id}
        >
          <FrontSide
            style={{
              backgroundColor: 'steelblue',
              transitionDuration: '0s'
            }}
            id={this.id_front}
            // onClick={(e)=> this.hideOthersFront(e)}
            onClick={(e) => this.pressButton(e)}
          >
            hello front
            <div>
              <div>{this.id_container}</div>
              <div>{this.id_front}</div>

            </div>
          </FrontSide>
          <BackSide
            style={{
              backgroundColor: 'dimgray',
              width: '100vw',
              height: '100vh',
            }}
            id={this.id_back}
            onClick={(e)=> this.showOthersFront(e)}
            >
            hello back
            <div>
              <div>{this.id_container}</div>
              <div>{this.id_front}</div>
            </div>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
            <Button onClick={this.sayHelloworld}>say helloworld</Button>
          </BackSide>
        </Flippy>
      </div>
    )
  }
}

export default HelloFlipGold