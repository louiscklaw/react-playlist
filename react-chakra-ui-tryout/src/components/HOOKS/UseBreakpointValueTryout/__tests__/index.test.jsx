import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { UseBreakpointValueTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<UseBreakpointValueTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
