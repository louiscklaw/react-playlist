import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { HeadingTryout } from '../';

describe('test HeadingTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<HeadingTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
