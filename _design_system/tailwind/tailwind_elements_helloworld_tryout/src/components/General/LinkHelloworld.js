import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <p class="mb-4">
        This is an example of how the basic{' '}
        <a href="#!" class="underline">
          link
        </a>{' '}
        looks in the middle of the sentence.
      </p>
      <p>
        This is an example of how the{' '}
        <a
          href="#!"
          class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out">
          classic blue link
        </a>{' '}
        looks in the middle of the sentence.
      </p>
      <a
        href="#!"
        class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out">
        A link with underline on hover
      </a>
      <button
        type="button"
        class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">
        Link
      </button>
    </>
  );
}
