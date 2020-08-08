import React from 'react';
import Toastify from 'toastify-js'

import "toastify-js/src/toastify.css"
import './App.css';

function App() {
  React.useEffect(()=>{
    Toastify({
      text: "This is a toast",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: 'left', // `left`, `center` or `right`
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopOnFocus: true, // Prevents dismissing of toast on hover
      onClick: function(){} // Callback after click
    }).showToast();
  })
  return (
    <div className="App">
      helloworld
    </div>
  );
}

export default App;
