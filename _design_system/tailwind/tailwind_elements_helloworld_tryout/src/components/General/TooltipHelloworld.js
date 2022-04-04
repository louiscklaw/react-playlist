import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>Basic example</div>
      <div style={{ backgroundColor: 'red' }}>
        <div> not working as required popperjs</div>
      </div>
    </>
  );
}
