import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ProgressTryout } from '../';

describe('test ProgressTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<ProgressTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
