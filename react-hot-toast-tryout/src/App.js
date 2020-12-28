import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import './App.css';



function HelloToast(){
  return(
    <div>
      <Toaster />
    </div>
  )
}

function App() {
  React.useEffect(()=>{
    toast('Hello World1');
    toast('Hello World2');
    toast('Hello World3');
    toast('Hello World4');
    toast('Hello World5');
  },[])

  return (
    <div className="App">
      <HelloToast />
    </div>
  );
}

export default App;
