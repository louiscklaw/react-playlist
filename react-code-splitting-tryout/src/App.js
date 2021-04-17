import React from "react";

import "./App.css";

import("./math").then((math) => {
  console.log(math.add(16, 26));
});

function App() {
  return <div className="App">helloworld</div>;
}

export default App;
