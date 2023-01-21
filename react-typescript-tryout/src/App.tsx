import React from 'react';
import logo from './logo.svg';
import './App.css';
import Helloworld from './components/Helloworld';


function App() {
  const helloworld_function = (s: string) => console.log(s)

  return (
    <div className="App">
      <div>helloworld App</div>
      <Helloworld test_function={helloworld_function} />
    </div>
  );
}

export default App;
