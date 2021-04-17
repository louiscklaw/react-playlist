import React from "react";
import "./App.css";

// TODOL resume me after done
// import 'react-perfect-scrollbar/dist/css/styles.css';

import { useRoutes } from "react-router-dom";
import routes from "src/routes";

export default function App() {
  const routing = useRoutes(routes);

  return <>{routing}</>;
}

// function App() {

//   return (
//     <div className="App">
//       <Dashboard />
//     </div>
//   );
// }
