import React from 'react'


import 'react-perfect-scrollbar/dist/css/styles.css'
import { useRoutes } from 'react-router-dom'
import GlobalStyles from 'src/components/GlobalStyles'
// import 'src/mixins/chartjs';
// import theme from 'src/theme';
import routes from 'src/routes'


export default function App() {
  const routing = useRoutes(routes)

  return (
    <>
      <GlobalStyles />
      {routing}
    </>
  );
}
