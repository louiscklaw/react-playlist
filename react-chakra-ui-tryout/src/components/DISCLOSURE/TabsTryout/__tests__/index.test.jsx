import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { TabsTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<TabsTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
