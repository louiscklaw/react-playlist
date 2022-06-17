import React from 'react'
import SwipeableViews from 'react-swipeable-views'

const styles = {
  slide: {
    padding: 15,
    minHeight: `calc(100vh)`,
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
  return (
    <div className="App">
      <SwipeableViews enableMouseEvents>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
      </SwipeableViews>
    </div>
  )
}

export default App
