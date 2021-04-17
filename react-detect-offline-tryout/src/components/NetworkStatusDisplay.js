import React from 'react';

import { NetworkStatusContext } from 'src/contexts/NetworkStatus';

export default function NetworkStatusDisplay({ url }) {
  const { online } = React.useContext(NetworkStatusContext);
  return (
    <>
      <div>helloworld url status</div>
      <div>{url}</div>
      <div>{JSON.stringify(online, null, 2)}</div>
    </>
  );
}
