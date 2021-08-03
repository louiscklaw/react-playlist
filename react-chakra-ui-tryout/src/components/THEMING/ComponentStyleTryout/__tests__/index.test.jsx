import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ComponentStyleTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<ComponentStyleTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
