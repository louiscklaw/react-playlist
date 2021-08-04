import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { UseOutsideClickTryout } from '../';

describe('test UseOutsideClickTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<UseOutsideClickTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
