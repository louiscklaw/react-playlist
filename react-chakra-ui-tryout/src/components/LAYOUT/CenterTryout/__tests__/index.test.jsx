import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CenterTryout } from '../';

describe('test CenterTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<CenterTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
