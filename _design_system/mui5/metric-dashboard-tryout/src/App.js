import React from 'react'
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext'

import Button from '@mui/material/Button'
import { Grid, Typography } from '@mui/material'

function App({ test_branch = false }) {
  return (
    <div className="App">
      <Grid container flexDirection={'column'} spacing={2}>
        <Grid item>
          <Typography variant="h3">title</Typography>
        </Grid>
        <Grid item container spacing={1}>
          {Array(12 * 19)
            .fill(0)
            .map((_, i) => (
              <Grid item xs={1} key={i}>
                <Button>passing ?</Button>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default App
