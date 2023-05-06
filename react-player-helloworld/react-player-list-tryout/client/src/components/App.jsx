import React, { Component } from 'react';
import ReactPlayer from "react-player";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App1 = () =>{
  return(
    <>helloworld app</>
  )
}

function App() {
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
