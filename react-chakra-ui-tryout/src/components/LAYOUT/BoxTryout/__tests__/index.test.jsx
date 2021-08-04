import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { BoxTryout } from '../';

describe('test BoxTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<BoxTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
