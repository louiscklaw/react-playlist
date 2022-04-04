import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div class="grid grid-cols-3 gap-4 flex items-center">
        <div class="mb-4">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
            class="max-w-full h-auto rounded-lg"
            alt=""
          />
        </div>

        <div class="mb-4">
          <img
            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
            class="max-w-full h-auto rounded-full"
            alt=""
          />
        </div>
        <div class="mb-4">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
            class="max-w-full h-auto rounded-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
