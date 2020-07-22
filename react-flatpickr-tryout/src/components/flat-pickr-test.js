import React from 'react'

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";



function FlatPickrTest(props){
  let [date, setDate] = React.useState(new Date())

  return(
    <>
      <Flatpickr
        data-enable-time
        value={date}
        onChange={date => {
          setDate(date);
        }}
      />
    </>
  )
}

export default FlatPickrTest