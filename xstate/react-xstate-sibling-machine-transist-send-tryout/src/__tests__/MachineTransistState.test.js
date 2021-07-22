import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

import updateByToggle1Machine from 'src/contexts/updateByToggle1Machine';

test('STATE_ONE', () => {
  let current_toggle_1 = { matches: (s) => s == 'STATE_ONE' };
  let sendToggle2 = jest.fn(() => {
    console.debug('sendToggle2 called');
  });
  updateByToggle1Machine(current_toggle_1, sendToggle2);
  expect(sendToggle2).not.toHaveBeenCalled();
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('STATE_TWO', () => {
  let current_toggle_1 = { matches: (s) => s == 'STATE_TWO' };
  let sendToggle2 = jest.fn(() => {
    console.debug('sendToggle2 called');
  });
  updateByToggle1Machine(current_toggle_1, sendToggle2);
  expect(sendToggle2).toHaveBeenCalledWith('STATE_TWO');
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('STATE_THREE', () => {
  let current_toggle_1 = { matches: (s) => s == 'STATE_THREE' };
  let sendToggle2 = jest.fn(() => {
    console.debug('sendToggle2 called');
  });
  updateByToggle1Machine(current_toggle_1, sendToggle2);
  expect(sendToggle2).toHaveBeenCalledWith('STATE_THREE');
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
