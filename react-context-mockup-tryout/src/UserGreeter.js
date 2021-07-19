import React from 'react';

import { UserContext } from './UserContext';

export default function UserGreeter() {
  const user = React.useContext(UserContext);
  let [test, setTest] = React.useState(1);
  const sayHelloworld = () => {
    console.log('helloworld');
    setTest(2);
  };

  return (
    <>
      {`Hello ${'user.name'}!`}
      <button id="sayHelloworldButton" onClick={sayHelloworld}>
        sayHelloworld
      </button>
    </>
  );
}
