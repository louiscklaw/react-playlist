import React from 'react';

import { useSnackbar } from 'notistack';

import { UserContext } from './UserContext';

export default function UserGreeter() {
  const user = React.useContext(UserContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  let [test, setTest] = React.useState(1);
  const sayHelloworld = () => {
    console.log('helloworld');
    enqueueSnackbar('I love hooks');

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
