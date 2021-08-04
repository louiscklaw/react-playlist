import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ListTryout } from '../';

describe('test ListTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<ListTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
