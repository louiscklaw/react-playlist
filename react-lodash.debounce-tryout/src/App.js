import React from 'react';
import _ from 'lodash'


import './App.css';

function App() {
  let [temp, setTemp] = React.useState(0)
  let [throttled_temp, setThrottledTemp] = React.useState(0)
  let [debounced_temp, setDebouncedTemp] = React.useState(0)

  const helloworld = () => {

    setTemp(temp+1)
  }

  const debouncedHelloworld = _.debounce(()=>{
    setDebouncedTemp(debounced_temp+1)
  }, 1000);

  const throttledHelloworld = _.throttle(()=>{
    setThrottledTemp(throttled_temp+1)
  }, 1000);

  const handleOnClick = () => {
    helloworld()
    debouncedHelloworld()
    throttledHelloworld()
  }

  return (
    <div className="App">
      <div>helloworld</div>
      <div>temp: {temp}</div>
      <div>throttled_temp: {throttled_temp}</div>
      <div>debounced_temp: {debounced_temp}</div>
      <button onClick={handleOnClick}>+1</button>
    </div>
  );
}

export default App;
