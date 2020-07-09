import React from 'react'

let style = {
  background: 'transparent',
  border: '1px solid #ccc'
}

function AirtableGridView(){
  return(
    <>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrYoeoOctTQmiQa2?backgroundColor=yellow&viewControls=on" frameborder="0" onmousewheel="" width="50%" height="533" style={style}></iframe>
    </>
  )
}

export default AirtableGridView
