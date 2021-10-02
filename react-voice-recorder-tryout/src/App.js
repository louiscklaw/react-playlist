import React from 'react';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import { Recorder } from 'react-voice-recorder';
import 'react-voice-recorder/dist/index.css';

function App({}) {
  let helloEmpty;

  let [state, setState] = React.useState({
    audioDetails: {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    },
  });

  console.log('helloEmpty', helloEmpty);

  const handleAudioStop = (data) => {
    console.log(data);
    setState({ audioDetails: data });
  };
  const handleAudioUpload = (file) => {
    console.log(file);
  };
  const handleReset = () => {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    setState({ audioDetails: reset });
  };

  return (
    <div className="App">
      <GlobalContextProvider>
        <Recorder
          record={true}
          title={'New recording'}
          audioURL={state.audioDetails.url}
          showUIAudio
          handleAudioStop={(data) => handleAudioStop(data)}
          handleAudioUpload={(data) => handleAudioUpload(data)}
          handleReset={() => handleReset()}
          mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
        />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
