import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { useRoutes } from 'react-router-dom';

import AppContext from './AppContext';

import Home from './pages/Home';
import About from './pages/About';
import TestComponent from './pages/TestComponent';
import LineupPage from 'src/pages/LineupPage';

function MenyLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

const ENV_PUBLIC_URL = process.env.PUBLIC_URL;

const meny_routes = [
  {
    path: `${ENV_PUBLIC_URL}/`,
    element: <MenyLayout />,
    children: [
      {
        // http://192.168.88.254:8004/meny/wF5SRAl2k5G1SD7GiRda/wF5SRAl2k5G1SD7GiRda/NewUserlineup
        path: '/',
        element: <Home />,
      },
      {
        // http://192.168.88.254:8004/meny/wF5SRAl2k5G1SD7GiRda/wF5SRAl2k5G1SD7GiRda/NewUserlineup
        path: '/about',
        element: <About />,
      },
      {
        // http://192.168.88.254:3001/meny/wF5SRAl2k5G1SD7GiRda/wF5SRAl2k5G1SD7GiRda/NewUserlineup
        path: '/meny/:rest_id/:menu_id/NewUserlineup',
        element: <LineupPage />,
      },
      {
        // http://192.168.88.254:3001/meny/wF5SRAl2k5G1SD7GiRda/wF5SRAl2k5G1SD7GiRda/Landing
        path: '/meny/:rest_id/:menu_id/Landing',
        element: <TestComponent />,
      },
    ],
  },
];

export default function App() {
  const routing = useRoutes(meny_routes);

  return (
    <div>
      <AppContext>{routing}</AppContext>
    </div>
  );
}
