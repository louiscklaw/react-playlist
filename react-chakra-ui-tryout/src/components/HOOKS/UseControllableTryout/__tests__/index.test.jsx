import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { UseControllableTryout } from '../';

describe('test UseControllableTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<UseControllableTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
