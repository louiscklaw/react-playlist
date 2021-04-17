import React from 'react';

import './App.css';

var QRCode = require('qrcode.react');

function App() {
  return (
    <div className="App">
      <div style={{height: "10vh"}}>Manage page</div>
      <QRCode value="https://lynked-demo-manage.louislabs.com/" />

      <div style={{height: "10vh"}}></div>
      <div style={{height: "10vh"}}>client page</div>
      <QRCode value="https://lynked-demo-client.louislabs.com/" />
    </div>
  );
}

export default App;
