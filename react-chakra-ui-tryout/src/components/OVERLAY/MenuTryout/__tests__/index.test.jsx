import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { MenuTryout } from '../';

describe('test MenuTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<MenuTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
