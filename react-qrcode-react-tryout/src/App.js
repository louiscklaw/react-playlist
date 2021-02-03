import React from "react";
import "./App.css";

var QRCode = require("qrcode.react");

function App() {
  return (
    <div className="App">
      <div style={{ width: 128, height: 128 }}>
        <QRCode value="http://facebook.github.io/react/" size={300} />
      </div>
    </div>
  );
}

export default App;
