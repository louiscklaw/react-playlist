import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { UseClipboardTryout } from '../';

describe('test UseClipboardTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<UseClipboardTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
