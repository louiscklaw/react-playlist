import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { UseControllableTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<UseControllableTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
