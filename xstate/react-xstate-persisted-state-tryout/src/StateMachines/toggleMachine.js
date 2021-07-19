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
export const toggleMachine = createMachine(
  {
    id: 'toggle',
    initial: STATE_INACTIVE,
    states: {
      [STATE_INACTIVE]: {
        on: { TOGGLE: { target: STATE_ACTIVE } },
      },
      [STATE_ACTIVE]: {
        on: {
          TOGGLE: { target: STATE_INACTIVE },
          SUSPEND: { target: STATE_SUSPEND },
        },
      },
      [STATE_SUSPEND]: {
        on: { UNSUSPEND: { target: STATE_ACTIVE } },
        entry: 'alertSuspended',
      },
    },
  },
  {
    actions: {
      // action implementation
      alertSuspended: (context, event) => {
        alert('alertSuspended!');
        console.log('context', context);
      },
      alertUnSuspended: (context, event) => {
        alert('alertUnSuspended!');
      },
    },
    activities: {
      /* ... */
    },
    delays: {
      /* ... */
    },
    guards: {
      /* ... */
    },
    services: {
      /* ... */
    },
  }
);
