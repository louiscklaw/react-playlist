import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { UseBooleanTryout } from '../';

describe('test UseBooleanTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<UseBooleanTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
