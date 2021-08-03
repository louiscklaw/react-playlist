import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { PopoverTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<PopoverTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
