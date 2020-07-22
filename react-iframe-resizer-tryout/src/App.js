import React, { useRef, useState } from 'react'
import IframeResizer from 'iframe-resizer-react'

import MessageData from './message-data'

import './App.css';

function App() {
  const iframeRef = useRef(null)
  const [messageData, setMessageData] = useState()
  const onResized = data => setMessageData(data)

  const onMessage = data => {
    setMessageData(data)
    iframeRef.current.sendMessage('Hello back from the parent page')
  }

  return (
    <div className="App">
      helloworld
      <IframeResizer
        forwardRef={iframeRef}
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        onMessage={onMessage}
        onResized={onResized}
        src="http://example.com"
        style={{ width: '1px', minWidth: '95%'}}
      />
      <MessageData data={messageData} />
    </div>
  );
}

export default App;
