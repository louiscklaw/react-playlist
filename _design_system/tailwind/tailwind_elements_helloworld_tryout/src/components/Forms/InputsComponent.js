import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>helper text</div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <input
            type="email"
            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleEmail01"
            placeholder="Input"
          />
          <div class="text-sm text-gray-500 mt-1">Text helper</div>
        </div>
      </div>
      <div>textarea</div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <label
            for="exampleFormControlTextarea1"
            class="form-label inline-block mb-2 text-gray-700">
            Example textarea
          </label>
          <textarea
            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"></textarea>
        </div>
      </div>
      <div>password</div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <label
            for="examplePassword0"
            class="form-label inline-block mb-2 text-gray-700">
            Password input
          </label>
          <input
            type="password"
            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="examplePassword0"
            placeholder="Password input"
          />
        </div>
      </div>
      <div class="flex justify-center">
        <div>
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput2"
              class="form-label inline-block mb-2 text-gray-700 text-xl">
              Form control lg
            </label>
            <input
              type="text"
              class="
          form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
              id="exampleFormControlInput2"
              placeholder="Form control lg"
            />
          </div>

          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInpu3"
              class="form-label inline-block mb-2 text-gray-700">
              Default input
            </label>
            <input
              type="text"
              class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
              id="exampleFormControlInput3"
              placeholder="Default input"
            />
          </div>

          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput4"
              class="form-label inline-block mb-2 text-gray-700 text-sm">
              Form control sm
            </label>
            <input
              type="text"
              class="
          form-control
          block
          w-full
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
              id="exampleFormControlInput4"
              placeholder="Form control sm"
            />
          </div>
        </div>
      </div>
    </>
  );
}
