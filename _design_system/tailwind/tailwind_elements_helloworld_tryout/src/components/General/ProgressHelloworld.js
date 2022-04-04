import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div class="w-full bg-gray-200 rounded-full">
        <div
          class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
          style={{ width: '25%' }}>
          {' '}
          25%
        </div>
      </div>
    </>
  );
}
