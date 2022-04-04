import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <label
            for="exampleSearch2"
            class="form-label inline-block mb-2 text-gray-700">
            Search
          </label>
          <input
            type="search"
            class="
        form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleSearch2"
            placeholder="Type query"
          />
        </div>
      </div>
    </>
  );
}
