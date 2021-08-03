import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { BreadcrumbTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<BreadcrumbTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
