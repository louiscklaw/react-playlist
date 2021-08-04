import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { SpinnerTryout } from '../';

describe('test SpinnerTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<SpinnerTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
