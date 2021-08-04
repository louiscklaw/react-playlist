import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CodeTryout } from '../';

describe('test CodeTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<CodeTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
