import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { UseMergeRefsTryout } from '../';

describe('test UseMergeRefsTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<UseMergeRefsTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
