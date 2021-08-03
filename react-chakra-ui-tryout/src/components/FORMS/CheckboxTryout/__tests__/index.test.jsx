import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CheckboxTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<CheckboxTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
