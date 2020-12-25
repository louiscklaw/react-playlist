import React, { Component } from 'react';
import { useCookies } from 'react-cookie';

import NameForm from './NameForm';

const COOKIE_USERNAME = 'username'
const COOKIE_LOGIN_LOCATION ='location'

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
  const [cookies, setCookie] = useCookies([COOKIE_USERNAME]);

  function onChange(newName) {
    setCookie(COOKIE_USERNAME, encryptText(newName), { path: '/' });
    setCookie(COOKIE_LOGIN_LOCATION, encryptText(window.location.hostname), { path: '/' });
    // console.log('test');
  }

  return(
    <>
      helloworld
      <NameForm name={cookies[COOKIE_USERNAME]} onChange={onChange} />
      {cookies[COOKIE_USERNAME] && <h1>Hello {decryptText(cookies[COOKIE_USERNAME])}!</h1>}
      {cookies[COOKIE_LOGIN_LOCATION] && <h1>Hello {decryptText(cookies[COOKIE_LOGIN_LOCATION])}!</h1>}
    </>
  )
}