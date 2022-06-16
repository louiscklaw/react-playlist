import React from 'react'
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext'

import Button from '@mui/material/Button'
import TestParagraph from './components/TestParagraph'
import { Box } from '@mui/material'

function App({ test_branch = false }) {
  return (
    <div className="App">
      <Button>mui helloworld</Button>
      <Box>
        <TestParagraph />
      </Box>
    </div>
  )
}

export default App
