import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div class="flex items-center justify-center space-x-2">
        <div
          class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full"
          role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div
          class="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
          role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="flex items-center justify-center space-x-2">
        <div
          class="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full"
          role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div
          class="spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0"
          role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
