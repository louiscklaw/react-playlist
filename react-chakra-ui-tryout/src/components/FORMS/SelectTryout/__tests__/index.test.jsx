import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { SelectTryout } from '../';

describe('test SelectTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<SelectTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
