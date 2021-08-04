import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { UseDisclosureTryout } from '../';

describe('test UseDisclosureTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<UseDisclosureTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
