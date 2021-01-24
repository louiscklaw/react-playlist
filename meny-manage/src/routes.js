import React from "react";
import { Navigate } from "react-router-dom";

import HelloworldLayout from "src/layouts/Helloworld";

import AppLayout from "src/layouts/AppLayout";
import DashboardLayout from "src/layouts/DashboardLayout";
import FullScreenLayout from "src/layouts/FullScreenLayout";

import HelloworldPage from "src/pages/helloworld";

import OverviewPage from "src/pages/OverviewPage";
import ReceptionListPage from "src/pages/ReceptionListPage";
import HelpRequestsPage from "src/pages/HelpRequestsPage";
import OrdersPage from "src/pages/OrdersPage";
import BillingManagementPage from "src/pages/BillingManagementPage";
import MenuManagementPage from "src/pages/MenuManagementPage";

import Examples from "src/components/Examples";

var ENV_PUBLIC_URL = process.env.PUBLIC_URL;

//       { path: "overview", element: <OverviewPage /> },

const routes = [
  {
    path: `${ENV_PUBLIC_URL}/app`,
    element: <AppLayout />,
    children: [
      { path: "overview", element: <OverviewPage /> },
      { path: "reception_list", element: <ReceptionListPage /> },
      { path: "help_requests", element: <HelpRequestsPage /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "billing_management", element: <BillingManagementPage /> },
      { path: "menu_management", element: <MenuManagementPage /> },
    ],
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
