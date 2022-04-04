import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        class="rounded-full w-32"
        alt="Avatar"
      />

      <div class="text-center">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          class="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
        <p class="text-gray-500">Web designer</p>
      </div>
    </>
  );
}
