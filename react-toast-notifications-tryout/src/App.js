import React from 'react';
import { useToasts } from 'react-toast-notifications'


import './App.css';

export const ToastDemo = ({ content }) => {
  const { addToast } = useToasts()
  return (
    <div onClick={() => addToast(content, {
      appearance: 'success',
      autoDismiss: true,
    })}>
      Add Toast
    </div>
  )
}



function App() {
  return (
    <div className="App">
      helloworld
      <ToastDemo content={'helloworld'}/>
    </div>
  );
}

export default App;
