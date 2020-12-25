import React from 'react';

import './App.css';

function App() {
  React.useEffect(()=>{
    console.log("helloworld")
    console.warn("helloworld")
    console.debug("helloworld")
    console.error("helloworld")
  },[])


  return (
    <div className="App">
      helloworld
    </div>
  );
}

export default App;
