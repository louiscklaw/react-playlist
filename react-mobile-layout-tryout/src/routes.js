import React from 'react';
import { Navigate } from 'react-router-dom';

import Layout1 from './layouts/layout1'
import Layout2 from './layouts/layout2'
import Layout3 from './layouts/layout3'

import HelloworldView1 from './views/HelloworldView'
import HelloworldView2 from './views/HelloworldView'
import HelloworldView3 from './views/HelloworldView'
import HelloworldView4 from './views/HelloworldView'

var ENV_PUBLIC_URL=process.env.PUBLIC_URL;


const routes = [
  {
    path: `${ENV_PUBLIC_URL}/`,
    element: <Layout1 />,
    children: [
      { path: 'hv1', element: <HelloworldView1 /> },
      { path: 'hv4', element: <HelloworldView4 /> },
    ]
  },
  {
    path: `${ENV_PUBLIC_URL}/`,
    element: <Layout2 />,
    children: [
      { path: 'hv2', element: <HelloworldView2 /> }
    ]
  },
  {
    path: `${ENV_PUBLIC_URL}/`,
    element: <Layout3 />,
    children: [
      { path: 'hv3', element: <HelloworldView3 /> },
    ]
  }
]

export default routes
