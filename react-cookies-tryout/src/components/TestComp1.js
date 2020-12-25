import React, { Component } from 'react';
import { useCookies } from 'react-cookie';

import NameForm from './NameForm';

const COOKIE_NAME = 'username'

const encryptText = (text_in) =>{
  if (text_in && text_in!=''){
    return text_in.split('').reverse().join('')
  }
}

const decryptText = (enc_text_in) => {
  console.log('enc_text_in', enc_text_in)
  if (enc_text_in && enc_text_in!=''){
    return enc_text_in.split('').reverse().join('')
  }
}

export default function TestComp1(){
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);

  function onChange(newName) {
    setCookie(COOKIE_NAME, encryptText(newName), { path: '/' });
    // console.log('test');
  }

  return(
    <>
      helloworld
      <NameForm name={cookies[COOKIE_NAME]} onChange={onChange} />
      {cookies[COOKIE_NAME] && <h1>Hello {decryptText(cookies[COOKIE_NAME])}!</h1>}
    </>
  )
}