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
    toast('Hello World');
  },[])

  return (
    <div className="App">
      <HelloToast />
    </div>
  );
}

export default App;
