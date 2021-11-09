import React from 'react';

import { NetworkStatusContext } from 'src/contexts/NetworkStatus';

export default function NetworkStatusDisplay({ url }) {
  const { online } = React.useContext(NetworkStatusContext);
  let [debug, setDebug] = React.useState(null);
  React.useEffect(() => {
    if (online) {
      setDebug('welcome online');
    } else {
      setDebug('welcome offline');
    }
  }, [online]);
  return (
    <>
      <div>helloworld url status</div>
      <div>{url}</div>
      <div>{JSON.stringify(online, null, 2)}</div>
      <div>{JSON.stringify(debug, null, 2)}</div>
    </>
  );
}
