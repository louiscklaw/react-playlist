import React from 'react'
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext'

import Button from '@mui/material/Button'

function App({ test_branch = false }) {
  return (
    <div className="App">
      <Button>helloworld</Button>
    </div>
  )
}

export default App
