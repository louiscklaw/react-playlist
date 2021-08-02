import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { BadgeTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<BadgeTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
