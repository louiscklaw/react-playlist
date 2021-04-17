import React from "react";
import Sound from "react-sound";

import "./App.css";

import DongSoundFile from "./assets/swiftly-610.mp3";

function App() {
  let [play_sound, setPlaySound] = React.useState(false);

  const handlePlaySound = () => {
    setPlaySound(true);
    setTimeout(() => {
      setPlaySound(false);
    }, 3000);
  };

  return (
    <div className="App">
      sound test
      <a href={DongSoundFile}>test link</a>
      {play_sound ? (
        <>
          hello sound
          <Sound
            url={DongSoundFile}
            playStatus={Sound.status.PLAYING}
            // playFromPosition={300 /* in milliseconds */}
            // onLoading={this.handleSongLoading}
            // onPlaying={this.handleSongPlaying}
          />
        </>
      ) : (
        <></>
      )}
      <button onClick={handlePlaySound} disabled={play_sound}>
        handlePlaySound
      </button>
    </div>
  );
}

export default App;
