import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { LinkTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<LinkTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
