import React, { useRef, useState } from 'react'
import IframeResizer from 'iframe-resizer-react'

import MessageData from './message-data'

import './App.css';

function App() {
  const iframeRefLowestElement = useRef(null)
  const iframeRefHeightCalculationMethod = useRef(null)
  const iframeRefStyleMinHeight = useRef(null)
  const [messageData, setMessageData] = useState()
  const onResized = data => setMessageData(data)

  const onMessage = data => {
    setMessageData(data)
    iframeRefLowestElement.current.sendMessage('Hello back from the parent page')
  }

  return (
    <div className="App">
      <div>helloworld</div>

      <h3>heightCalculationMethod="lowestElement"</h3>
      <IframeResizer
        forwardRef={iframeRefLowestElement}
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        onMessage={onMessage}
        onResized={onResized}
        src="http://example.com"
        style={{ width: '1px', minWidth: '33%'}}
      />


      <h3>heightCalculationMethod="300px"</h3>
      <IframeResizer
        forwardRef={iframeRefHeightCalculationMethod}
        heightCalculationMethod="300px"
        inPageLinks
        log
        onMessage={onMessage}
        onResized={onResized}
        src="http://example.com"
        style={{ width: '1px', minWidth: '33%'}}
      />

      <h3>style->minHeight->"300px"</h3>
      <IframeResizer
        forwardRef={iframeRefStyleMinHeight}
        inPageLinks
        log
        onMessage={onMessage}
        onResized={onResized}
        src="http://example.com"
        style={{ width: '1px', minWidth: '33%', minHeight:"300px"}}
      />

      <MessageData data={messageData} />

    </div>
  );
}

export default App;
