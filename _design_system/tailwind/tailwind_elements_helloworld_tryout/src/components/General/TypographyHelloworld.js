import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>line height</div>
      <p class="leading-none mb-4">
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </p>
      <p class="leading-tight mb-4">
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </p>
      <p class="leading-normal mb-4">
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </p>
      <p class="leading-loose">
        This is a long paragraph written to show how the line-height of an
        element is affected by our utilities. Classes are applied to the element
        itself or sometimes the parent element. These classes can be customized
        as needed with our utility API.
      </p>
      <p class="text-start">Start aligned text on all viewport sizes.</p>
      <p class="text-center">Center aligned text on all viewport sizes.</p>
      <p class="text-right">End aligned text on all viewport sizes.</p>

      <div>Text alignment</div>
      <p class="sm:text-start">
        Start aligned text on viewports sized SM (small) or wider.
      </p>
      <p class="sm:text-start">
        Start aligned text on viewports sized MD (medium) or wider.
      </p>
      <p class="sm:text-start">
        Start aligned text on viewports sized LG (large) or wider.
      </p>
      <p class="sm:text-start">
        Start aligned text on viewports sized XL (extra-large) or wider.
      </p>

      <div>Headings</div>
      <h2 class="font-medium leading-tight text-5xl">Tailwind Elements</h2>
      <h2 class="font-medium leading-tight text-4xl">Tailwind Elements</h2>
      <h3 class="font-medium leading-tight text-3xl">Tailwind Elements</h3>
      <h4 class="font-medium leading-tight text-2xl">Tailwind Elements</h4>
      <h5 class="font-medium leading-tight text-xl">Tailwind Elements</h5>
      <h6 class="font-medium leading-tight text-base">Tailwind Elements</h6>
    </>
  );
}
