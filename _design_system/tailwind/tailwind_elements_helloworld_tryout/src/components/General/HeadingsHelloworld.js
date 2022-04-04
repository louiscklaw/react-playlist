import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
        Tailwind Elements
      </h1>
      <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">
        Tailwind Elements
      </h6>
    </>
  );
}
