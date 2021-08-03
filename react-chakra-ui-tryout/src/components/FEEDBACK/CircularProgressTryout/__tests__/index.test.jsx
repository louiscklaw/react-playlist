import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CircularProgressTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<CircularProgressTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
