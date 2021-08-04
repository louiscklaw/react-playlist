import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ToastTryout } from '../';

describe('test ToastTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<ToastTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
