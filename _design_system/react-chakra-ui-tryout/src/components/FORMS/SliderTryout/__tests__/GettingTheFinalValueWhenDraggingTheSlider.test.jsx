import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { GettingTheFinalValueWhenDraggingTheSlider } from '../';

describe('test GettingTheFinalValueWhenDraggingTheSlider tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(
      <ChakraProvider>
      <GettingTheFinalValueWhenDraggingTheSlider />
      </ChakraProvider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
