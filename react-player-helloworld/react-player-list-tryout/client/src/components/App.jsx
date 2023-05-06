import React, { Component, useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import ReactPlayer from "react-player";

const WS_URL = 'ws://127.0.0.1:8000';

function isUserEvent(message) {
  let evt = JSON.parse(message.data);
  return evt.type === 'userevent';
}

function isDocumentEvent(message) {
  let evt = JSON.parse(message.data);
  return evt.type === 'contentchange';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const ReceiveJsonMessge = () =>{
  try {
    const {lastJsonMessage} = useWebSocket(WS_URL, {
      share: true,
      filter: isDocumentEvent
    });

    return(
      <div>
        {JSON.stringify(lastJsonMessage)}
      </div>
    )
  } catch (error) {
    throw(error);
    return (
      <>sorry some error occured</>
    )
  }

}

const App = () =>{
  const [username, setUsername] = useState('');
  const {  sendJsonMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true
  });

  useEffect(() => {
    if(username && readyState === ReadyState.OPEN) {
      sendJsonMessage({
        username,
        type: 'userevent'
      });
    }
  }, [username, sendJsonMessage, readyState]);

  // useEffect(()=>{
  //   console.log({lastJsonMessage})
  // },[lastJsonMessage])

  return(
    <div>
      helloworld app
      <ReceiveJsonMessge />
    </div>
  )
}

function App1() {
  const url_list = [
    'https://www.youtube.com/watch?v=cBkNtO86_mY',
    'https://www.youtube.com/watch?v=icPHcK_cCF4',
    'https://www.youtube.com/watch?v=s-MsZo02dos',
  ]

  var [playing, setPlaying] = React.useState(true)
  var [video_url, setVideoUrl] = React.useState(url_list[0])
  var [video_idx, setVideoIdx] = React.useState(0)

  const helloEnded = () =>{
    console.log('hello ended');

    setPlaying(false);

    if (video_idx < url_list.length-1 ) {
      setVideoIdx(video_idx+1)
    }else{
      setVideoIdx(0)
    }

    setVideoUrl(url_list[video_idx])

    setTimeout(() => {
      setPlaying(true)
    }, 100);

  }

  return (
    <div className="App">
      <ReactPlayer
        url={video_url}
        playing={playing}
        width={'100vw'}
        height={'66vw'}
        onEnded={helloEnded}
      />

      <div>
        <pre>{JSON.stringify(video_url)}</pre>
        <pre>{JSON.stringify(video_idx)}</pre>
        <pre>{JSON.stringify(playing)}</pre>
      </div>

      <div>helloworld</div>
    </div>
  );
}

export default App;
