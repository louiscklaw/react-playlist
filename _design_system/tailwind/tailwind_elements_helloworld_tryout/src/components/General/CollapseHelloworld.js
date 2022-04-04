import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <a
        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="collapse"
        href="#collapseWithScrollbar"
        role="button"
        aria-expanded="false"
        aria-controls="collapseWithScrollbar">
        Longer content
      </a>
      <div
        class="collapse mt-4 max-h-24 overflow-y-auto"
        id="collapseWithScrollbar"
        style={{ maxWidth: '500px' }}>
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
          excepteur butcher vice lomo. Leggings occaecat craft beer
          farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
          heard of them accusamus labore sustainable VHS. 3 wolf moon officia
          aute, non cupidatat skateboard dolor brunch. Food truck quinoa
          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
          bird on it squid single-origin coffee nulla assumenda shoreditch et.
        </p>
      </div>
    </>
  );
}
