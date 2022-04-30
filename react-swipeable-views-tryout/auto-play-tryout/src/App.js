import { Box } from '@mui/material'
import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import Pagination from 'src/components/Pagination'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const styles = {
  slide: {
    padding: 15,
    minHeight: `calc(100vh - 100px)`,
    color: '#fff',
    overflow: 'hidden',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
}

function App({ test_branch = false }) {
  let [index, setIndex] = useState(0)

  const handleChangeIndex = index => {
    setIndex(index)
  }
  return (
    <div className="App">
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
      </SwipeableViews>
      <Box sx={{}}>
        <Pagination dots={3} index={index} onChangeIndex={handleChangeIndex} />
      </Box>
    </div>
  )
}

export default App
