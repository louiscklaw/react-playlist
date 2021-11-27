import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    // ga.send(['pageview', location.pathname]);
  }, [location]);
}

export default function InsideSwitch() {
  usePageViews();
  return <>InsideSwitch</>;
}
