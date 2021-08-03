import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { NumberInputTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<NumberInputTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
