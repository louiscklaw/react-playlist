import React, { Component } from 'react';
import { useCookies } from 'react-cookie';

import NameForm from './NameForm';

export default function TestComp1(){
  const [cookies, setCookie] = useCookies(['name']);

  function onChange(newName) {
    setCookie('name', newName, { path: '/' });
    // console.log('test');
  }

  return(
    <>
      helloworld
      <NameForm name={cookies.name} onChange={onChange} />
      {cookies.name && <h1>Hello {cookies.name}!</h1>}
    </>
  )
}