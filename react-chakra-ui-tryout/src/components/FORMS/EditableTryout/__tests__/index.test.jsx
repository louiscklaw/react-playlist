import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EditableTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<EditableTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
