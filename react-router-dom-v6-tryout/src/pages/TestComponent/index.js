import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { AppContext } from 'src/AppContext';

import { StateMachineContext } from 'src/contexts/StateMachineContext';

export default function TestComponent() {
  let navigate = useNavigate();
  let { rest_id, menu_id } = useParams();
  let { setRestId } = React.useContext(AppContext);

  React.useEffect(() => {
    if (rest_id === undefined) {
    } else {
      setRestId(rest_id);
      console.log('TestComponent', 'rest_id', rest_id);
      navigate(`/meny/${rest_id}/${menu_id}/NewUserlineup`);
    }
  }, [rest_id, menu_id]);

  React.useEffect(() => {
    alert('helloworld');
  }, []);

  return <div>TestComponent helloworld</div>;
}
