import React from "react";

import Flippy, { FrontSide, BackSide } from "react-flippy";

import ReactImagesUploadExample from "./ReactImagesUploadExample";

function App() {
  const [is_flipped, setIsFlipped] = React.useState(false);

  const [pictures, setPictures] = React.useState([]);

  const handleDoneClick = () => {
    setIsFlipped(false);
  };
  const handleUploadClick = () => {
    setIsFlipped(true);
  };

  const handleDebugClick = () => {
    console.log(pictures);
  };
  return (
    <>
      <Flippy
        flipOnHover={false}
        // flipOnClick={true}
        flipDirection="horizontal"
        // ref={(r) => (this.flippy = r)}
        // style={{ width: "200px", height: "200px" }}
        isFlipped={is_flipped}
      >
        <FrontSide
          style={{
            backgroundColor: "#41669d",
          }}
        >
          {JSON.stringify(
            pictures.map((file) => file.name),
            null,
            2
          )}
          <button onClick={handleUploadClick}>Upload image</button>
          <button onClick={handleDebugClick}>debug</button>
        </FrontSide>
        <BackSide style={{ backgroundColor: "#175852" }}>
          <div></div>
          <div>
            <ReactImagesUploadExample
              pictures={pictures}
              setPictures={setPictures}
            />
            <button onClick={handleDoneClick}>Done</button>
          </div>
        </BackSide>
      </Flippy>
    </>
  );
}

export default App;
