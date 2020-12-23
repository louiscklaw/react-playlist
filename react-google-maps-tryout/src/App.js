import React from 'react';
import { GoogleMap, Marker } from "react-google-maps"


import './App.css';

const MyMapComponent = (props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>




function App() {
  return (
    <div className="App">
      <MyMapComponent isMarkerShown />
      <MyMapComponent isMarkerShown={false} />
    </div>
  );
}

export default App;
