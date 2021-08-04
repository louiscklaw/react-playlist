import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { TableTryout } from '../';

describe('test TableTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<TableTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
