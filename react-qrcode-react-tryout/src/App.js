import React from "react";
import QRCode from "qrcode.react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ width: 128, height: 128 }}>
        <QRCode
          renderAs={"svg"}
          value="http://facebook.github.io/react/"
          size={300}
        />
      </div>
    </div>
  );
}

export default App;
