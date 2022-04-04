import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>preview</div>
      <h3 class="text-2xl text-gray-700 font-bold mb-6 -ml-3">Latest News</h3>

      <ol class="border-l-2 border-purple-600">
        <li>
          <div class="md:flex flex-start">
            <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div class="flex justify-between mb-4">
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                  New Web Design
                </a>
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                  04 / 02 / 2022
                </a>
              </div>
              <p class="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
              <button
                type="button"
                class="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true">
                Preview
              </button>
              <button
                type="button"
                class="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true">
                See demo
              </button>
            </div>
          </div>
        </li>
        <li>
          <div class="md:flex flex-start">
            <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div class="flex justify-between mb-4">
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                  21 000 Job Seekers
                </a>
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                  12 / 01 / 2022
                </a>
              </div>
              <p class="text-gray-700 mb-6">
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam an deleniti.
              </p>
              <button
                type="button"
                class="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true">
                Preview
              </button>
              <button
                type="button"
                class="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true">
                See demo
              </button>
            </div>
          </div>
        </li>
        <li>
          <div class="md:flex flex-start">
            <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div class="flex justify-between mb-4">
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                  Awesome Employers
                </a>
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                  21 / 12 / 2021
                </a>
              </div>
              <p class="text-gray-700 mb-6">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
              <button
                type="button"
                class="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true">
                Preview
              </button>
              <button
                type="button"
                class="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true">
                See demo
              </button>
            </div>
          </div>
        </li>
      </ol>
      <div>Basic example</div>
      <ol class="border-l border-gray-300">
        <li>
          <div class="flex flex-start items-center pt-3">
            <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
            <p class="text-gray-500 text-sm">01.07.2021</p>
          </div>
          <div class="mt-0.5 ml-4 mb-6">
            <h4 class="text-gray-800 font-semibold text-xl mb-1.5">
              Title of section 1
            </h4>
            <p class="text-gray-500 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              scelerisque diam non nisi semper, et elementum lorem ornare.
              Maecenas placerat facilisis mollis. Duis sagittis ligula in
              sodales vehicula.
            </p>
          </div>
        </li>
        <li>
          <div class="flex flex-start items-center pt-2">
            <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
            <p class="text-gray-500 text-sm">13.09.2021</p>
          </div>
          <div class="mt-0.5 ml-4 mb-6">
            <h4 class="text-gray-800 font-semibold text-xl mb-1.5">
              Title of section 2
            </h4>
            <p class="text-gray-500 mb-3">
              Libero expedita explicabo eius fugiat quia aspernatur autem
              laudantium error architecto recusandae natus sapiente sit nam
              eaque, consectetur porro molestiae ipsam an deleniti.
            </p>
          </div>
        </li>
        <li>
          <div class="flex flex-start items-center pt-2">
            <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
            <p class="text-gray-500 text-sm">25.11.2021</p>
          </div>
          <div class="mt-0.5 ml-4 pb-5">
            <h4 class="text-gray-800 font-semibold text-xl mb-1.5">
              Title of section 3
            </h4>
            <p class="text-gray-500 mb-3">
              Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
              natus! Eum corporis illum nihil officiis tempore. Excepturi illo
              natus libero sit doloremque, laborum molestias rerum pariatur quam
              ipsam necessitatibus incidunt, explicabo.
            </p>
          </div>
        </li>
      </ol>
    </>
  );
}
