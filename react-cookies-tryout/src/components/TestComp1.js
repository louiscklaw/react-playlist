import React, { Component } from 'react';
import { useCookies } from 'react-cookie';

import NameForm from './NameForm';

const COOKIE_USERNAME = 'username'
const COOKIE_LOGIN_LOCATION ='location'

const user_cred_cookie_options = {
  path: '/',
  maxAge: 3600*24*14
}

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
  const [cookies, setCookie, removeCookie] = useCookies([COOKIE_USERNAME]);

  React.useEffect(()=>{
    if (cookies[COOKIE_USERNAME]==null || cookies[COOKIE_USERNAME]=='' ){
      alert('hello empty cookie_username')
    }
  },[])

  function onChange(newName) {
    setCookie(COOKIE_USERNAME, encryptText(newName), user_cred_cookie_options);
    setCookie(COOKIE_LOGIN_LOCATION, encryptText(window.location.hostname), user_cred_cookie_options);
    // console.log('test');
  }

  const unsetCookie = () => {
    removeCookie(COOKIE_USERNAME)
    removeCookie(COOKIE_LOGIN_LOCATION)
  }

  return(
    <>
      helloworld
      <NameForm name={decryptText(cookies[COOKIE_USERNAME])} onChange={onChange} />
      {cookies[COOKIE_USERNAME] && <h1>Hello {decryptText(cookies[COOKIE_USERNAME])}!</h1>}
      {cookies[COOKIE_LOGIN_LOCATION] && <h1>Hello {decryptText(cookies[COOKIE_LOGIN_LOCATION])}!</h1>}

      <button onClick={unsetCookie}>unset cookie</button>
    </>
  )
}