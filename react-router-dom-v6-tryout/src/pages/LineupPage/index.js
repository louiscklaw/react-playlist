import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import { AppContext } from 'src/AppContext';

import { StateMachineContext } from 'src/contexts/StateMachineContext';

export default function LineupPage() {
  let { toggle_machine } = React.useContext(StateMachineContext);

  return (
    <div>
      <h1>LineupPage 123321 </h1>
      <pre>{JSON.stringify(toggle_machine, null, 2)}</pre>
      <div>end</div>
    </div>
  );
}
