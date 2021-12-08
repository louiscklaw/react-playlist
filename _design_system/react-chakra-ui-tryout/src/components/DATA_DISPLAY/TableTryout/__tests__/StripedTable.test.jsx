import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { StripedTable } from '../';

describe('test StripedTable tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(
      <ChakraProvider>
      <StripedTable />
      </ChakraProvider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
