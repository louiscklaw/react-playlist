import React from 'react'
import google_pay_png from './images/google_pay.png'

function GooglePayButton({ onClick }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${google_pay_png})`,
          width: '474px',
          height: '106px',
          cursor: 'pointer',
        }}
        onClick={onClick}
      ></div>
    </>
  )
}

export default GooglePayButton
