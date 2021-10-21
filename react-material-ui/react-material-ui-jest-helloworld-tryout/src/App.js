import React from 'react';
import { Box, Button, Dialog } from '@material-ui/core';

export default function App() {
  function sayHelloworld() {
    console.log('sayHelloworld');
  }

  return (
    <>
      <div>helloworld</div>
      <div>
        <button id="sayHelloworld" onClick={sayHelloworld}>
          sayHelloworld
        </button>
      </div>
    </>
  );
}
