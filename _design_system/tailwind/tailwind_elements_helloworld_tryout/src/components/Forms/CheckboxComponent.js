import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>inline</div>
      <div class="flex justify-center">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label
            class="form-check-label inline-block text-gray-800"
            for="inlineCheckbox1">
            1
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label
            class="form-check-label inline-block text-gray-800"
            for="inlineCheckbox2">
            2
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
            disabled
          />
          <label
            class="form-check-label inline-block text-gray-800 opacity-50"
            for="inlineCheckbox3">
            3 (disabled)
          </label>
        </div>
      </div>
      <div>disabled</div>
      <div class="flex justify-center">
        <div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
              type="checkbox"
              value=""
              id="flexCheckDisabled"
              disabled
            />
            <label
              class="form-check-label inline-block text-gray-800 opacity-50"
              for="flexCheckDisabled">
              Disabled checkbox
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label
              class="form-check-label inline-block text-gray-800 opacity-50"
              for="flexCheckCheckedDisabled">
              Disabled checked checkbox
            </label>
          </div>
        </div>
      </div>
      <div>basic</div>
      <div class="flex justify-center">
        <div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
