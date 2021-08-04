import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { DividerTryout } from '../';

describe('test DividerTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<DividerTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});