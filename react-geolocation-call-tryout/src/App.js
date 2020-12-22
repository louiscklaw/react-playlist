import React,{Component} from 'react';

import './App.css';

function App(){
  let [lat, setLat] = React.useState(0)
  let [long, setLong] = React.useState(0)


  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    });
  },[])
  return(
    <>
      helloworld
      <div>lat: {lat}</div>
      <div>long: {long}</div>
    </>
  )
}

export default App;
