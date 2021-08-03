import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { VisuallyHiddenTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<VisuallyHiddenTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
