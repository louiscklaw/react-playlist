import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>not working</div>
      <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
          class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
          alt="Louvre"
        />
      </div>

      <div
        class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
          class="max-w-xs"
          alt="Louvre"
        />
        <a href="#!">
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
        </a>
      </div>

      <img
        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
        class="max-w-xs hover:shadow-lg transition duration-300 ease-in-out"
        alt="Louvre"
      />

      <div style={{ padding: '1rem' }}>helloworld</div>
    </>
  );
}
