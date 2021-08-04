import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { InputTryout } from '../';

describe('test InputTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<InputTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});