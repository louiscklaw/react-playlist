import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { FormControlTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<FormControlTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
