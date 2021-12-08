import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { SelectTryout } from '../';

describe('test SelectTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(
      <ChakraProvider>
      <SelectTryout />
      </ChakraProvider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
