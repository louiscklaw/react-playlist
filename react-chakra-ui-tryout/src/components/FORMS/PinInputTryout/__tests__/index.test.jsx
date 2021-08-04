import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { PinInputTryout } from '../';

describe('test PinInputTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<PinInputTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
