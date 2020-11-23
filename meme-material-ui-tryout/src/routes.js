import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';

import NotFoundView from 'src/views/errors/NotFoundView';

var ENV_PUBLIC_URL=process.env.PUBLIC_URL;



const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: `${ENV_PUBLIC_URL}/`,
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to={`${ENV_PUBLIC_URL}/app/dashboard`} /> },
      { path: '*', element: <Navigate to={`${ENV_PUBLIC_URL}/404`} /> }
    ]
  }
];

export default routes;
