import React from 'react';

import retry from 'jest-retries';

import renderer from 'react-test-renderer';
import HelloComponent from '../components/helloworld';

retry('Do flaky work', 5, () => {
  const tree = renderer
    .create(<HelloComponent test_input={1}></HelloComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
