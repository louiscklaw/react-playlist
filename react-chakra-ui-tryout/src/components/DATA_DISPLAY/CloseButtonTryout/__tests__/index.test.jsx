import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CloseButtonTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<CloseButtonTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
