import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { IconButtonTryout } from '../';

describe('test IconButtonTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<IconButtonTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
