import React from "react";
import Sound from "react-sound";

import "./App.css";

function App() {
  let [position, setPosition] = React.useState(null);
  let [disable_button, setDisableButton] = React.useState(false);
  const playSound = () => {
    setPosition(0);
    setDisableButton(true);
  };

  const handleSongFinishedPlaying = () => {
    setPosition(9000);

    setDisableButton(false);
  };
  return (
    <div className="App">
      sound test
      <a href="assets/swiftly-610.mp3">test link</a>
      <Sound
        url="assets/swiftly-610.mp3"
        playStatus={Sound.status.PLAYING}
        position={position}
        // playFromPosition={300 /* in milliseconds */}
        // onLoading={this.handleSongLoading}
        // onPlaying={this.handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
      <button onClick={playSound} disabled={disable_button}>
        play
      </button>
    </div>
  );
}

export default App;
