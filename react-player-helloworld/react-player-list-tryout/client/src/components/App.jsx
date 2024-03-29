import React, { Component, useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import ReactPlayer from 'react-player';

import { typesDef } from './typesDef';
import { storePlaylist, loadPlaylist } from '../localStore';

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

const PlayerContent = ({ stored_list }) => {
  try {
    const { lastJsonMessage } = useWebSocket(WS_URL, {
      share: true,
      filter: isPlayListUpdated,
    });

    var [url_list, setUrlList] = useState({ urls: stored_list });
    var [playing, setPlaying] = useState(true);
    var [video_url, setVideoUrl] = useState('');

    useEffect(() => {
      if (url_list.urls.length > 0) {
        setVideoUrl(url_list.urls[0]);
      } else {
        console.log('url_list is empty');
      }

      storePlaylist(url_list.urls);
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
          setUrlList({
            urls: [...url_list.urls.filter(u => u != youtube_url)],
          });
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

        <div>
          <div>current playlist</div>
          <div>
            {url_list.urls.map((u, idx) => (
              <div>
                {idx} - {u}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    return <>PlayerContent error</>;
  }
};

const App = () => {
  try {
    const [stored_list] = useState(loadPlaylist());
    const [username, setUsername] = useState('player');
    const [debug, setDebug] = useState({});
    const [connection_status, setConnectionStatus] = useState();

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
        setConnectionStatus('connected');
      } else if (readyState === ReadyState.CLOSED) {
        setConnectionStatus('disconnected');
      }
      setDebug({ connection_status });
    }, [username, sendJsonMessage, readyState]);

    return (
      <div>
        <PlayerContent stored_list={stored_list} />
        {/* <ReceiveJsonMessge /> */}
        {/* <pre>{JSON.stringify({ connection_status }, null, 2)}</pre> */}
      </div>
    );
  } catch (error) {
    // throw error
    console.error(error);
    return <>sorry but error occured</>;
  }
};

export default App;
