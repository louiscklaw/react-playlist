import React from 'react';
import { render, mount } from 'enzyme';
import Card from '../index';

describe('Card', () => {
  describe('Snapshots', () => {
    it('Card', () => {
      const wrapper = render(<Card />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Render', () => {
    it('always renders a div', () => {
      const wrapper = mount(<Card />);
      const divs = wrapper.find('div');
      expect(divs.length).toBe(1);
    });
  });
});
