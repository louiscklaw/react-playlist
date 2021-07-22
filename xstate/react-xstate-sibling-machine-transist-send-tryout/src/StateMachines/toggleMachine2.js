import { createMachine } from 'xstate';

const STATE_INACTIVE = 'inactive';
const STATE_ACTIVE = 'active';
const STATE_SUSPEND = 'suspend';

const SEND_TOGGLE = 'TOGGLE';
const SEND_SUSPEND = 'SUSPEND';
const SEND_UNSUSPEND = 'UNSUSPEND';

export {
  STATE_ACTIVE,
  STATE_INACTIVE,
  SEND_TOGGLE,
  SEND_SUSPEND,
  SEND_UNSUSPEND,
};

// This machine is completely decoupled from React
export const toggleMachine2 = createMachine({
  id: 'toggle2',
  initial: 'STATE_ONE',
  states: {
    STATE_ONE: {
      on: { STATE_TWO: { target: 'STATE_TWO' } },
    },
    STATE_TWO: {
      on: {
        STATE_ONE: { target: 'STATE_ONE' },
        STATE_THREE: { target: 'STATE_THREE' },
      },
    },
    STATE_THREE: {
      on: { STATE_ONE: { target: 'STATE_ONE' } },
    },
  },
});
