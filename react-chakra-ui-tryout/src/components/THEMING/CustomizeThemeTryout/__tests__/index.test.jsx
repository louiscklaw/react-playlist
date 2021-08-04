import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CustomizeThemeTryout } from '../';

describe('test CustomizeThemeTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<CustomizeThemeTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
