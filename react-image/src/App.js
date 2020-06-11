import React from 'react';
import logo from './logo.svg';
import './App.css';



import Img from 'react-image'
const MyComponent = () => <Img
  src="./img/silhouette-of-golden-gate-bridge-during-golden-hour-1485894.jpg"
  style={{maxWidth: '800px', height:'auto'}}
  loader={<Loading></Loading>}
  />

const Loading = () => <p>Loading ...</p>

function App() {
  return (
    <div className="App">
        <MyComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
