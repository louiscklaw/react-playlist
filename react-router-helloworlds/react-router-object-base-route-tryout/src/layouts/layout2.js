import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

export default function TestLayout() {
  return(
    <>

      <Outlet />

    </>
  )
}