import React from 'react';

import renderer from 'react-test-renderer';
import HelloComponent from '../components/helloworld'

it('renders correctly', () => {
  const tree = renderer
    .create(<HelloComponent test_input={1}></HelloComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
