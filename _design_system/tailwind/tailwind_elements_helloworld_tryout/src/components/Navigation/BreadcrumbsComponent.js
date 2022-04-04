import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>With background</div>
      <nav class="bg-gray-100 px-5 py-3 rounded-md w-full">
        <ol class="list-reset flex">
          <li>
            <a href="#" class="text-blue-600 hover:text-blue-700">
              Home
            </a>
          </li>
          <li>
            <span class="text-gray-500 mx-2">/</span>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:text-blue-700">
              Library
            </a>
          </li>
          <li>
            <span class="text-gray-500 mx-2">/</span>
          </li>
          <li class="text-gray-500">Data</li>
        </ol>
      </nav>
      <div>Changing the separator</div>
      <nav class="bg-grey-light rounded-md w-full">
        <ol class="list-reset flex">
          <li>
            <a href="#" class="text-blue-600 hover:text-blue-700">
              Home
            </a>
          </li>
          <li>
            <span class="text-gray-500 mx-2"></span>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:text-blue-700">
              Library
            </a>
          </li>
          <li>
            <span class="text-gray-500 mx-2"></span>
          </li>
          <li class="text-gray-500">Data</li>
        </ol>
      </nav>
      <div>Breadcrumb in navbar</div>
      <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <nav class="bg-grey-light rounded-md w-full" aria-label="breadcrumb">
            <ol class="list-reset flex">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <span class="text-gray-500 mx-2">/</span>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-600">
                  Library
                </a>
              </li>
              <li>
                <span class="text-gray-500 mx-2">/</span>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-600">
                  Data
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
      <div>Basic example</div>
      <div>
        <nav class="rounded-md w-full">
          <ol class="list-reset flex">
            <li class="text-gray-500">Home</li>
          </ol>
        </nav>

        <br />

        <nav class="rounded-md w-full">
          <ol class="list-reset flex">
            <li>
              <a href="#" class="text-blue-600 hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <span class="text-gray-500 mx-2">/</span>
            </li>
            <li class="text-gray-500">Library</li>
          </ol>
        </nav>

        <br />

        <nav class="rounded-md w-full">
          <ol class="list-reset flex">
            <li>
              <a href="#" class="text-blue-600 hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <span class="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <a href="#" class="text-blue-600 hover:text-blue-700">
                Library
              </a>
            </li>
            <li>
              <span class="text-gray-500 mx-2">/</span>
            </li>
            <li class="text-gray-500">Data</li>
          </ol>
        </nav>
      </div>
    </>
  );
}
