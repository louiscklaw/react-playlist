import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { UseMediaQueryTryout } from '../';

describe('test UseMediaQueryTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<UseMediaQueryTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});