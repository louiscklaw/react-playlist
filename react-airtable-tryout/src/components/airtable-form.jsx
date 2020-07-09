import React from 'react'

let style = {
  background: 'transparent',
  border: '1px solid #ccc'
}

function AirtableForm(){
  return(
    <>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrr40UcGSuplGt2k?backgroundColor=yellow" frameborder="0" onmousewheel="" width="50%" height="533" style={style}></iframe>
    </>
  )
}

export default AirtableForm
