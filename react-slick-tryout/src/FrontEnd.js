import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './App.css'

function FrontEnd() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider
      {...settings}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'gold',

        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ backgroundColor: 'red' }}>
        <div
          style={{
            width: '100%',
            height: '550px',
            backgroundImage: `url('https://via.placeholder.com/850x850.png?text=Visit+Blogging.com+Now')`,
            backgroundColor: 'pink',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  )
}

export default FrontEnd
