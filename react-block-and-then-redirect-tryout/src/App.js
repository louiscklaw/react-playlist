import React from 'react';
import { useNavigate } from 'react-router-dom';



import Page1 from './Page1'
import Page2 from './Page2'

import './App.css';



function App() {
  let navigate = useNavigate();
  let [user, setUser] = React.useState(null)
  let [confirm_loaded, setConfirmLoaded] = React.useState(false)

  React.useEffect(()=>{
    setTimeout(()=>{
      setConfirmLoaded(true)
    }, 5000)
    setTimeout(()=>{
      setUser({})
    }, 3000)

  },[])

  React.useEffect(()=>{
    if (confirm_loaded){
      if (user != null){
        console.log('user passed')
      }else{
        console.log('user failed')
      }
    }
  }, [confirm_loaded])

  // React.useEffect(()=>{
  //   if (user){
  //     navigate('https://www.google.com')
  //   }else{
  //     navigate('https://www.adobe.com')
  //   }
  // },[user])

  return (
    <div className="App">
      helloworld

    </div>
  );
}

export default App;
