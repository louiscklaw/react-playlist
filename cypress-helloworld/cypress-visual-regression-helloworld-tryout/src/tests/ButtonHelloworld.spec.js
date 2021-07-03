import React from 'react';
import { mount } from '@cypress/react';
import ButtonHelloworld1 from 'src/components/ButtonHelloworld1';

it('renders learn react link', () => {
  mount(<ButtonHelloworld1 />);
  // cy.get('button').contains('ButtonHelloworld');

  cy.compareSnapshot('ButtonHelloworld', 0.0);
});
