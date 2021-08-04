import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { KbdTryout } from '../';

describe('test KbdTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<KbdTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});