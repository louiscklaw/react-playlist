import React from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from 'src/AppContext';

export default function TestInitComponent() {
  let { rest_id } = useParams;
  let { setRestId } = React.useContext(AppContext);

  React.useEffect(() => {
    setRestId(rest_id);
  }, [rest_id]);

  return <>TestInitComponent rest_id {JSON.stringify(rest_id, null, 2)}</>;
}
