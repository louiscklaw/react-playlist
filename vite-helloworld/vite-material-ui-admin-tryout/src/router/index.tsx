import React, { FC } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

import DashboardLayout from '../layouts/DashboardLayout'
import Helloworld from '../components/Helloworld'

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/helloworld',
        element: <Helloworld />
      }
    ]
  }
]

const RenderRouter: FC = () => {
  const element = useRoutes(routeList)
  return element
}

export default RenderRouter
