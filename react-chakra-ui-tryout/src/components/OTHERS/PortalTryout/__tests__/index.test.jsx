import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { PortalTryout } from '../';

describe('test PortalTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<PortalTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
