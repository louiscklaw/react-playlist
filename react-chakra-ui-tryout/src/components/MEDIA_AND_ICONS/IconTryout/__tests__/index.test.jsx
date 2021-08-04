import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { IconTryout } from '../';

describe('test IconTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<IconTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
