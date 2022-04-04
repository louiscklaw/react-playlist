import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>Jumbotron has more</div>
      <a href="https://tailwind-elements.com/docs/standard/components/jumbotron/">
        https://tailwind-elements.com/docs/standard/components/jumbotron/
      </a>
      <div
        class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
          height: '400px',
        }}>
        <div
          class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div class="flex justify-center items-center h-full">
            <div class="text-white">
              <h2 class="font-semibold text-4xl mb-4">Heading</h2>
              <h4 class="font-semibold text-xl mb-6">Subheading</h4>
              <a
                class="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light">
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
        <h2 class="font-semibold text-3xl mb-5">Hello world!</h2>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-6 border-gray-300" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <button
          type="button"
          class="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light">
          Learn more
        </button>
      </div>
    </>
  );
}
