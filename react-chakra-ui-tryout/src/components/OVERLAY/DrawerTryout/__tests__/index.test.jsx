import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { DrawerTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<DrawerTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
