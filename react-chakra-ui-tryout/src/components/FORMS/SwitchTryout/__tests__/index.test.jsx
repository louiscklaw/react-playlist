import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { SwitchTryout } from '../';

describe('test SwitchTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<SwitchTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
