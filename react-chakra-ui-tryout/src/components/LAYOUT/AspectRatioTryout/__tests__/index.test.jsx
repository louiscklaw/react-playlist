import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { AspectRatioTryout } from '../';

describe('test AspectRatioTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<AspectRatioTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
