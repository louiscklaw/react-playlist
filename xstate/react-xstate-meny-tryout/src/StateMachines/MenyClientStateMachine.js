import { createMachine, assign } from 'xstate';

const MenyClientStateMachine = createMachine({
  id: 'meny_client_state_machine',
  initial: 'RESTAURANT_STATUS_UNKNOWN',
  context: { userId: 42, user: undefined, error: undefined },
  states: {
    RESTAURANT_STATUS_UNKNOWN: {
      on: {
        CHECKED_RESTAURANT_OPEN: { target: 'RESTAURANT_OPENED' },
        CHECKED_RESTAURANT_CLOSE: { target: 'RESTAURANT_CLOSED' },
      },
    },
    RESTAURANT_OPENED: {
      // immediately take the transition to 'three'
      on: { always: 'CLIENT_LANDING' },
    },
    RESTAURANT_CLOSED: {
      on: { CHECKED_RESTAURANT_OPEN: { target: 'CLIENT_LANDING' } },
    },
    CLIENT_LANDING: {
      on: {
        CLIENT_REQUEST_TABLE: { target: 'CLIENT_WAITING_TABLE' },
        CHECKED_RESTAURANT_CLOSE: { target: 'RESTAURANT_CLOSED' },
      },
    },
    CLIENT_WAITING_TABLE: {
      on: { RESTAURANT_ASSIGNED_TABLE: { target: 'CLIENT_TABLE_ASSIGNED' } },
    },
    CLIENT_TABLE_ASSIGNED: {
      on: { RESTAURANT_CLEAR_BILL: { target: 'CLIENT_BILL_CLEARED' } },
    },
    CLIENT_BILL_CLEARED: {
      on: { alway: 'RESTAURANT_STATUS_UNKNOWN' },
    },
  },
});

export { MenyClientStateMachine };
