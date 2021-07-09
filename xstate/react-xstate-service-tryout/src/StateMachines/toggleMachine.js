import { createMachine } from 'xstate';

// This machine is completely decoupled from React
export const toggleMachine = createMachine({
  id: 'toggle',

  initial: 'closed',
  states: {
    closed: {
      on: { OPEN: 'opening' },
    },
    opening: {
      invoke: { src: 'openMenu', onDone: { target: 'open' } },
      on: { CLOSE: 'closing' },
    },
    open: {
      on: { CLOSE: 'closing' },
    },
    closing: {
      invoke: { src: 'closeMenu', onDone: { target: 'closed' } },
      on: { OPEN: 'opening' },
    },
  },
});
