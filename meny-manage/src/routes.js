import React from "react";
import { Navigate } from "react-router-dom";

import HelloworldLayout from "src/layouts/Helloworld";

import DashboardLayout from "src/layouts/DashboardLayout";
import FullScreenLayout from "src/layouts/FullScreenLayout";

import HelloworldPage from "src/pages/helloworld";
import OverviewPage from "src/pages/OverviewPage";

import Examples from "src/components/Examples";

var ENV_PUBLIC_URL = process.env.PUBLIC_URL;

//       { path: "overview", element: <OverviewPage /> },

const routes = [
  {
    path: `${ENV_PUBLIC_URL}/app`,
    element: <DashboardLayout />,
    children: [{ path: "overview", element: <OverviewPage /> }],
  },
  {
    path: `${ENV_PUBLIC_URL}/`,
    element: <FullScreenLayout />,
    children: [
      { path: "helloworld", element: <HelloworldPage /> },
      { path: "examples", element: <Examples /> },
      {
        path: "/",
        element: <Navigate to={`${ENV_PUBLIC_URL}/app/overview`} />,
      },
    ],
  },
];

export default routes;
