import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function App() {
  return (
    <>
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </>
  )
}
