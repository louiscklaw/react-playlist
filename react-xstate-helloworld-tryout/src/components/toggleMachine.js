import { createMachine } from 'xstate';

const STATE_INACTIVE = 'inactive';
const STATE_ACTIVE = 'active';
const SEND_TOGGLE = 'TOGGLE';

export { STATE_ACTIVE, STATE_INACTIVE, SEND_TOGGLE };

// This machine is completely decoupled from React
export const toggleMachine = createMachine({
  id: 'toggle',
  initial: STATE_INACTIVE,
  states: {
    inactive: {
      on: { TOGGLE: STATE_ACTIVE },
    },
    active: {
      on: { TOGGLE: STATE_INACTIVE },
    },
  },
});
