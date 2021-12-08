import React from 'react';

function Test() {
  function handleClick() {
    throw new Error('I crashed!');
  }

  return <h1 onClick={(e) => handleClick(e)}>test</h1>;
}

export default Test;
