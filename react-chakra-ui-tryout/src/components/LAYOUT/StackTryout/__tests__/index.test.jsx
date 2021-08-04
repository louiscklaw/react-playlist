import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { StackTryout } from '../';

describe('test StackTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<StackTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
