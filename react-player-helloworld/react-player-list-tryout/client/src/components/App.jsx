import React, { Component, useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import ReactPlayer from 'react-player';

import { typesDef } from './typesDef';

const WS_URL = 'ws://127.0.0.1:8000';

function isUserEvent(message) {
  let evt = JSON.parse(message.data);
  return evt.type === 'userevent';
}

function isDocumentEvent(message) {
  let evt = JSON.parse(message.data);
  return evt.type === 'contentchange';
}

function isPlayListUpdated(message) {
  let evt = JSON.parse(message.data);
  return evt.type === typesDef.PLAYLIST_CHANGE;
}

function isAddYoutubeUrl(message) {
  let evt = JSON.parse(message.data);
  return evt.type === typesDef.ADD_YOUTUBE_URL;
}

const ReceiveJsonMessge = () => {
  try {
    const { lastJsonMessage } = useWebSocket(WS_URL, {
      share: true,
      filter: isPlayListUpdated,
    });

    return <div>{JSON.stringify(lastJsonMessage)}</div>;
  } catch (error) {
    console.error(error);
    return <>sorry some error occured</>;
  }
};

const PlayerContent = () => {
  try {
    const { lastJsonMessage } = useWebSocket(WS_URL, {
      share: true,
      filter: isPlayListUpdated,
    });

    var [url_list, setUrlList] = useState({ urls: [] });
    var [playing, setPlaying] = useState(true);
    var [video_url, setVideoUrl] = useState('');

    useEffect(() => {
      if (url_list.urls.length > 0) {
        setVideoUrl(url_list.urls[0]);
      } else {
        console.log('url_list is empty');
      }
    }, [url_list]);

    useEffect(() => {
      console.log('lastJsonMessageUpdated');

      if (lastJsonMessage?.data?.action) {
        let { action } = lastJsonMessage.data;

        if (action == typesDef.ADD_URL) {
          var { youtube_url } = lastJsonMessage.data;
          setUrlList({ urls: [...url_list.urls, youtube_url] });
        } else if (action == typesDef.DEL_URL) {
          var { youtube_url } = lastJsonMessage.data;
          setUrlList({ urls: [...url_list.urls.filter(u => u != youtube_url)] });
        } else if (action == typesDef.STOP_CURRENT_VIDEO) {
          setPlaying(false);
        } else if (action == typesDef.RESUME_CURRENT_VIDEO) {
          setPlaying(true);
        } else if (action == typesDef.SKIP_CURRENT_VIDEO) {
          setPlaying(false);

          setVideoUrl('');

          if (url_list.urls.length > 1) {
            var temp = url_list.urls.slice(1, 9999);
            setUrlList({ urls: temp });
          } else {
            setUrlList({ urls: [] });
          }

          setTimeout(() => {
            setPlaying(true);
          }, 100);
        } else {
          console.log(`no match action ${action}`);
        }
      } else {
        console.log('action not found');
      }

    }, [lastJsonMessage]);

    if (url_list?.urls && url_list?.urls?.length == 0 && video_url == '') {
      return <>list is empty</>;
    }

    return (
      <>
        <ReactPlayer
          url={video_url}
          playing={playing}
          width={400}
          height={300}
          onEnded={() => {
            setPlaying(false);
            setVideoUrl('');

            if (url_list.urls.length > 1) {
              var temp = url_list.urls.slice(1, 9999);
              setUrlList({ urls: temp });
            } else {
              setUrlList({ urls: [] });
            }
            setTimeout(() => {
              setPlaying(true);
            }, 100);
          }}
        />

        <pre>{JSON.stringify({ video_url, url_list, playing }, null, 2)}</pre>
      </>
    );
  } catch (error) {
    console.error(error);
    return <>PlayerContent error</>;
  }
};

const App = () => {
  try {
    const [username, setUsername] = useState('');
    const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
      onOpen: () => {
        console.log('WebSocket connection established.');
      },
      share: true,
      filter: () => false,
      retryOnError: true,
      shouldReconnect: () => true,
    });

    useEffect(() => {
      if (username && readyState === ReadyState.OPEN) {
        sendJsonMessage({
          username,
          type: 'userevent',
        });
      }
    }, [username, sendJsonMessage, readyState]);

    // useEffect(()=>{
    //   console.log({lastJsonMessage})
    // },[lastJsonMessage])

    return (
      <div>
        <PlayerContent />
        <ReceiveJsonMessge />
      </div>
    );
  } catch (error) {
    // throw error
    console.error(error);
    return <>sorry but error occured</>;
  }
};

export default App;

// function App1() {
//   const url_list = [
//     'https://www.youtube.com/watch?v=cBkNtO86_mY',
//     'https://www.youtube.com/watch?v=icPHcK_cCF4',
//     'https://www.youtube.com/watch?v=s-MsZo02dos',
//   ];

//   var [playing, setPlaying] = React.useState(true);
//   var [video_url, setVideoUrl] = React.useState(url_list[0]);
//   var [video_idx, setVideoIdx] = React.useState(0);

//   const helloEnded = () => {
//     console.log('hello ended');

//     setPlaying(false);

//     if (video_idx < url_list.length - 1) {
//       setVideoIdx(video_idx + 1);
//     } else {
//       setVideoIdx(0);
//     }

//     setVideoUrl(url_list[video_idx]);

//     setTimeout(() => {
//       setPlaying(true);
//     }, 100);
//   };

//   return (
//     <div className="App">
//       blablabla
//       <ReactPlayer
//         url={video_url}
//         playing={playing}
//         width={400}
//         height={300}
//         onEnded={helloEnded}
//       />
//       <div>
//         <pre>{JSON.stringify(video_url)}</pre>
//         <pre>{JSON.stringify(video_idx)}</pre>
//         <pre>{JSON.stringify(playing)}</pre>
//       </div>
//       <div>helloworld</div>
//     </div>
//   );
// }
