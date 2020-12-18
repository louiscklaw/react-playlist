import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function TestLayout() {


  return(
    <>
      <div style={{
        height: '100vh',
        width: '100vw',
        backgroundColor:'cyan'
      }}>
        <Outlet />
        <Link to="hv1">helloworld1</Link>
        <Link to="hv2">helloworld2</Link>
        <Link to="hv3">helloworld3</Link>
        <Link to="hv4">helloworld4</Link>
      </div>
    </>
  )
}