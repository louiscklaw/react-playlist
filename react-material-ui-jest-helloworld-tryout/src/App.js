import React from 'react';

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
