import React from 'react';
import { mount } from '@cypress/react';
import ButtonHelloworld from '../components/ButtonHelloworld';

it('renders learn react link', () => {
  mount(<ButtonHelloworld />);
  cy.get('button').contains('ButtonHelloworld');
});
