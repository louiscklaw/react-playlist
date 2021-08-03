import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ButtonTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<ButtonTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
