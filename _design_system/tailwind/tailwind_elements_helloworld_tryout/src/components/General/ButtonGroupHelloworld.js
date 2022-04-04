import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div class="flex items-center justify-center mb-3">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group">
          <button
            type="button"
            class="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            Left
          </button>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            Middle
          </button>
          <button
            type="button"
            class="rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            Right
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center mb-3">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group">
          <button
            type="button"
            class="rounded-l inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase hover:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-0 active:bg-purple-800 transition duration-150 ease-in-out">
            Left
          </button>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase hover:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-0 active:bg-purple-800 transition duration-150 ease-in-out">
            Middle
          </button>
          <button
            type="button"
            class="rounded-r inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase hover:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-0 active:bg-purple-800 transition duration-150 ease-in-out">
            Right
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center mb-3">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group">
          <button
            type="button"
            class="rounded-l inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-0 active:bg-green-700 transition duration-150 ease-in-out">
            Left
          </button>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-0 active:bg-green-700 transition duration-150 ease-in-out">
            Middle
          </button>
          <button
            type="button"
            class="rounded-r inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-0 active:bg-green-700 transition duration-150 ease-in-out">
            Right
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center mb-3">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group">
          <button
            type="button"
            class="rounded-l inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">
            Left
          </button>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">
            Middle
          </button>
          <button
            type="button"
            class="rounded-r inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">
            Right
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center mb-3">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group">
          <button
            type="button"
            class="rounded-l inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase hover:bg-yellow-600 focus:bg-yellow-600 focus:outline-none focus:ring-0 active:bg-yellow-700 transition duration-150 ease-in-out">
            Left
          </button>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase hover:bg-yellow-600 focus:bg-yellow-600 focus:outline-none focus:ring-0 active:bg-yellow-700 transition duration-150 ease-in-out">
            Middle
          </button>
          <button
            type="button"
            class="rounded-r inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase hover:bg-yellow-600 focus:bg-yellow-600 focus:outline-none focus:ring-0 active:bg-yellow-700 transition duration-150 ease-in-out">
            Right
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="toolbar">
          <button
            type="button"
            class="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            1
          </button>
          <button
            type="button"
            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            2
          </button>
          <button
            type="button"
            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            3
          </button>
          <button
            type="button"
            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            4
          </button>
          <button
            type="button"
            class=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            5
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group">
          <button
            type="button"
            class="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            Left
          </button>
          <button
            type="button"
            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            Middle
          </button>
          <button
            type="button"
            class=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
            Right
          </button>
        </div>
      </div>
    </>
  );
}
