import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ModalTryout } from '../';

describe('test ModalTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<ModalTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
