import React, { useState } from 'react';

const UseMemoComponent = () => {
  const [helloworld, setHelloworld] = useState({
    test: { test_key: 'test_value' },
    key: 'value',
    hello: '1',
  });

  React.useEffect(() => {
    console.log('test', 'helloworld?.test?.test_key running', helloworld);
  }, [helloworld?.test?.test_key]);

  React.useEffect(() => {
    console.log('test', 'helloworld?.test running', helloworld);
  }, [helloworld?.test]);

  React.useEffect(() => {
    console.log('test', 'helloworld?.hello running', helloworld);
  }, [helloworld?.hello]);

  return (
    <div>
      <button onClick={() => setHelloworld({ hello: 'world' })}>Hello! </button>
      <button onClick={() => setHelloworld({ hello1: 'world' })}>
        Hello!{' '}
      </button>
      <button
        onClick={() =>
          setHelloworld({
            test: { test_key: 'test_value' },
            key: 'value',
            hello: '1',
          })
        }>
        Hello!{' '}
      </button>
      <pre>{JSON.stringify(helloworld, null, 2)}</pre>
    </div>
  );
};

export default UseMemoComponent;
