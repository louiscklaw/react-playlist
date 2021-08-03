import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { DefaultThemeTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<DefaultThemeTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
