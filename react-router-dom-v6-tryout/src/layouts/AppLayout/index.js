import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function AppLayout() {
  const [show_content, setShowContent] = React.useState();

  return (
    <>
      <Outlet />
    </>
  );
}
