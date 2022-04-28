import React from 'react'
import BackgroundSlider from 'react-background-slider'

function App({ test_branch = false }) {
  let image1 =
    'https://unsplash.com/photos/T2_y9Y5hcIs/download?ixid=MnwxMjA3fDB8MXxhbGx8NXx8fHx8fDJ8fDE2NTExMjU2Mzc&force=true&w=1920'
  let image2 = 'https://unsplash.com/photos/CmSwG8Jqs48/download?force=true&w=1920'
  let image3 = 'https://unsplash.com/photos/PYqMJeyfV9o/download?force=true&w=1920'

  return (
    <div className="App">
      <div style={{ width: '200px', height: '200px' }}>
        <BackgroundSlider images={[image1, image2, image3]} duration={2} transition={1} />
      </div>
    </div>
  )
}

export default App
