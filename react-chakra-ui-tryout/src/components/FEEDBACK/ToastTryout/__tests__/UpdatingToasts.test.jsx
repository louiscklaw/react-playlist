import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { UpdatingToasts } from '../';

describe('test UpdatingToasts tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(
      <ChakraProvider>
      <UpdatingToasts />
      </ChakraProvider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});