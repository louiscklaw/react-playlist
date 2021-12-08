import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { NumberInputTryout } from '../';

describe('test NumberInputTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(
      <ChakraProvider>
      <NumberInputTryout />
      </ChakraProvider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
