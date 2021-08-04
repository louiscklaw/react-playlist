import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { SliderTryout } from '../';

describe('test SliderTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<SliderTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
