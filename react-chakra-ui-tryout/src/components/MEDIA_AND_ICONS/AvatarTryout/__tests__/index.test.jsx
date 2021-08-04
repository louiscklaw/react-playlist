import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { AvatarTryout } from '../';

describe('test AvatarTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<AvatarTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
