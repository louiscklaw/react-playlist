import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <p>
        You can use the mark tag to <mark class="bg-blue-200">highlight</mark>{' '}
        text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p>
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </p>
      <p>
        <ins>
          This line of text is meant to be treated as an addition to the
          document.
        </ins>
      </p>
      <p>
        <u>This line of text will render as underlined.</u>
      </p>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        <strong>This line rendered as bold text.</strong>
      </p>
      <p>
        <em>This line rendered as italicized text.</em>
      </p>
      <p class="text-base font-light leading-relaxed mt-0 mb-0 text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer class="block text-gray-600">
        - Someone famous in <cite>Source Title</cite>
      </footer>
      <small class="font-normal leading-normal mt-0 mb-4 text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero
        iste quod quibusdam maxime recusandae odit eveniet, aspernatur culpa
        provident error molestiae vitae corporis in vero est! Beatae, ipsum
        voluptatibus.
      </small>
    </>
  );
}
