import React from 'react';
import { Chrono } from "react-chrono";

import './App.css';

const items = [
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png"
      }
    }
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png"
      }
    }
  }
];

function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "400px" }}>
        <Chrono items={items} />
      </div>
    </div>
  );
}

export default App;
