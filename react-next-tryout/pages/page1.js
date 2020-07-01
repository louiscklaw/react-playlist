import React, { Component } from 'react';
import Link from 'next/link';

function Page1(){
  return(
    <>
      Page1
      <Link href="/">
        <a>index</a>
      </Link>
    </>
  )
}

export default Page1