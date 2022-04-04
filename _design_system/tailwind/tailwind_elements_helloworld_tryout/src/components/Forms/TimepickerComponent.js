import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>note: not working, requires MDB ?</div>
      <div class="flex justify-center">
        <div class="timepicker relative form-floating mb-3 xl:w-96">
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Select a date"
          />
          <label for="floatingInput" class="text-gray-700">
            Select a time
          </label>
          <button
            tabindex="0"
            type="button"
            class="timepicker-toggle-button"
            data-mdb-toggle="timepicker">
            <i class="fas fa-clock timepicker-icon"></i>
          </button>
        </div>
      </div>
    </>
  );
}
