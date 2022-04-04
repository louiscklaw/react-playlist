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
        <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="py-3 px-6 border-b border-gray-300">Featured</div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Special title treatment
            </h5>
            <p class="text-gray-700 text-base mb-4">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Button
            </button>
          </div>
          <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
            2 days ago
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Button
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
            Card title
          </h5>
          <p class="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Button
          </button>
        </div>
      </div>
    </>
  );
}
