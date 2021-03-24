import React from 'react'
import apple_lay_png from './images/apple_pay.png'

function ApplePayButton({ onClick }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${apple_lay_png})`,
          width: '474px',
          height: '106px',
          cursor: 'pointer',
        }}
        onClick={onClick}
      ></div>
    </>
  )
}

export default ApplePayButton
