import React, { useRef, useState } from "react";
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from "src/contexts/GlobalContext";
import { StlViewer } from "react-stl-viewer";

const helloworld = () => {
  console.log("helloworld");
};

const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl";

const style = {
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
};

function App({ test_branch = false }) {
  let helloanotherworld = "123";

  let helloEmpty;

  if (test_branch) {
    console.log("find true");
  } else {
    console.log("find false");
  }

  console.log("helloEmpty", helloEmpty);

  const ref = useRef();

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <HelloComponent /> */}
        hellocomponents
        {helloanotherworld}
        <StlViewer
          style={style}
          orbitControls
          shadows
          showAxes
          floorProps={{ gridWidth: 300 }}
          url={url}
          modelProps={{
            positionX: 150,
            positionY: 150,
            scale: 1,
            color: "#008675",
            ref,
          }}
          onFinishLoading={console.log}
        />
        {JSON.stringify(helloEmpty, null, 2)}
      </GlobalContextProvider>
    </div>
  );
}

export default App;
