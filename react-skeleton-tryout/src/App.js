import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "./App.css";

function ComponentTest() {
  let [hello_body, setHelloBody] = React.useState(null);
  React.useEffect(() => {
    setTimeout(() => {
      setHelloBody("another hellobody");
    }, 1000);
  }, []);
  return <>{hello_body || <Skeleton count={3} />}</>;
}

function App() {
  let [hello_title, setHelloTitle] = React.useState(null);
  let [hello_body, setHelloBody] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      console.log("hello title");
      setHelloTitle("hello title");

      setHelloBody("hellobody");
    }, 3000);
  }, []);

  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <div className="App">
        <div style={{ fontSize: 20, lineHeight: 2 }}>
          <h1>
            {hello_title || <Skeleton circle={true} height={50} width={50} />}
          </h1>
          {hello_body || <Skeleton count={3} />}
          {<ComponentTest /> || <Skeleton count={3} />}
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default App;
