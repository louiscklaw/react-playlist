import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from './NavBar'
import TopBar from './TopBar'

const DashboardLayout = () => {
  return (
    <>
      <TopBar />
      helloworld
      <NavBar />
      helloworld
      <Outlet />
    </>
  )
}

export default DashboardLayout
