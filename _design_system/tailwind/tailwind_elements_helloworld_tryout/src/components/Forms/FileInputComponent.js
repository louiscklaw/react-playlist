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
      <div class="flex justify-center">
        <div class="mb-3 w-96">
          <label
            for="formFile"
            class="form-label inline-block mb-2 text-gray-700">
            Default file input example
          </label>
          <input
            class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
          />
        </div>
      </div>
    </>
  );
}
