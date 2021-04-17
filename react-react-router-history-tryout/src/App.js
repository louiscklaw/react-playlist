import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import history from './history'
import './App.css';

const handleButtonOnClick = () => {
  history.push('/link_by_handle_button_on_click')
}

function App() {
  return (
    <div className="App">
      helloworld
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <button onClick={handleButtonOnClick}>button onclick</button>
    </div>
  );
}

export default App;
