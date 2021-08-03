import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ImageTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<ImageTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
