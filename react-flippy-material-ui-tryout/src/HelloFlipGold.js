import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Flippy, { FrontSide, BackSide } from 'react-flippy';


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function HelloFlipGold(){
  let [id_back, setIdBack]=React.useState(`id_${getRandomInt(999999)}`)
  let [id_front, setIdFront]=React.useState(`id_${getRandomInt(999999)}`)
  let [id_container, setIdContainer]=React.useState(`id_${getRandomInt(999999)}`)

  let [query_id_back, setQueryIdBack] = React.useState(`#${id_back}`)
  let [query_id_front, setQueryIdFront] = React.useState(`#${id_front}`)
  let [query_id_container, setQueryIdContainer] = React.useState(`#${id_container}`)
  let [flip_enabled, setFlipEnabled] = React.useState(true)

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


    updatePos(query_id_back, query_id_front)
  },[])

  return(
    <div >
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={flip_enabled} // default false
        flipDirection="horizontal" // horizontal or vertical
        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{
          width: '30vw',
          height: '150px',

        }} /// these are optional style, it is not necessary

      >
          <FrontSide
            style={{
              backgroundColor: 'steelblue',
              transitionDuration: '0s'
            }}
            // onClick={(e)=> this.hideOthersFront(e)}
            // onClick={(e) => pressButton(e)}
            id={id_front}
          >
            hello front
            <div>
              <div>{'this.id_container'}</div>
              <div>{'this.id_front'}</div>

            </div>
          </FrontSide>
          <BackSide
            style={{
              backgroundColor: 'dimgray',
              width: '100vw',
              height: '100vh',
            }}
            // onClick={(e)=> this.showOthersFront(e)}
            id={id_back}
            >
            hello back
            <div>
              <div>{'this.id_container'}</div>
              <div>{'this.id_front'}</div>
            </div>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
            <Button onClick={(e)=>alert('helloworld')}>say helloworld</Button>
          </BackSide>
      </Flippy>
      helloworld
    </div>
  )
}

export default HelloFlipGold