import React from 'react';
import MyCard from './components/MyCard'
import {Header} from 'tabler-react'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header.H1>helloworld</Header.H1>
      <a href="http://tabler-react.com/documentation/#header" target="_blank"> documentation </a>
      <MyCard />
    </div>
  );
}

export default App;
