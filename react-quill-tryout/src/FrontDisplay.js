import React from 'react'

function FrontDisplay({ value }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </>
  )
}

export default FrontDisplay
