import React from 'react';
import renderer from 'react-test-renderer';

test('test <div>helloworld</div>', () => {
  const tree = renderer.create(<div>helloworld</div>).toJSON();
  expect(tree).toMatchSnapshot();
});
