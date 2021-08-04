import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { SkeletonTryout } from '../';

describe('test SkeletonTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<SkeletonTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
