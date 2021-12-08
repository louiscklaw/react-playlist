import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloworldComponent() {
  let { hello1, helloworld1, helloworld2 } = React.useContext(GlobalContext);

  React.useEffect(() => {
    console.log('hello1', hello1);
  }, []);

  return (
    <>
      <button onClick={helloworld1}>helloworld1</button>
      <button onClick={helloworld2}>helloworld2</button>
    </>
  );
}
