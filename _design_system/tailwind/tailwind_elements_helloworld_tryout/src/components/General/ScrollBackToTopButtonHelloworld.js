import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>html + javascript cannot show demo</div>
      <a href="https://tailwind-elements.com/docs/standard/components/scroll-back-to-top-button/">
        https://tailwind-elements.com/docs/standard/components/scroll-back-to-top-button/
      </a>
    </>
  );
}
