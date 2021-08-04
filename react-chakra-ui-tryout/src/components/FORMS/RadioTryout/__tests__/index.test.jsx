import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { RadioTryout } from '../';

describe('test RadioTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<RadioTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
