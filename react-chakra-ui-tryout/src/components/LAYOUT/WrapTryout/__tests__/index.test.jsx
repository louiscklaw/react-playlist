import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { WrapTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<WrapTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
