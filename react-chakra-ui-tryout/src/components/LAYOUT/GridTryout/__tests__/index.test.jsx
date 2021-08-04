import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { GridTryout } from '../';

describe('test GridTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<GridTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
