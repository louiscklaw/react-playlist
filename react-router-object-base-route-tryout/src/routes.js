import React from 'react';
import { Navigate } from 'react-router-dom';

import Helloworld from './components/helloworld'
import Layout2 from './layouts/layout2'
import TestPageParams from './components/TestPageParams'

const ENV_PUBLIC_URL=process.env.PUBLIC_URL;

const routes=[
  {
    path: `${ENV_PUBLIC_URL}/`,
    element: <Layout2 />,
    children: [
      { path: 'helloworld', element: <Helloworld /> },
      // http://localhost:3000/helloworld/1233211234567/
      { path: 'helloworld/:id/', element: <TestPageParams /> }
    ]
  }
]

export default routes
