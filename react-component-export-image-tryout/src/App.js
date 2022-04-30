import { useRef } from 'react'
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from 'react-component-export-image'

function App({ test_branch = false }) {
  let ref = useRef(null)

  return (
    <div className="App">
      <div ref={ref}>Hello World</div>
      <button onClick={() => exportComponentAsJPEG(ref)}>Export As JPEG</button>
      <button onClick={() => exportComponentAsPDF(ref)}>Export As PDF</button>
      <button onClick={() => exportComponentAsPNG(ref)}>Export As PNG</button>
    </div>
  )
}

export default App
