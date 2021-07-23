import { createMachine, send } from 'xstate';

import {
  RESTAURANT_CLOSED,
  RESTAURANT_OPENED,
  CLIENT_BILL_CLEARED,
  RESTAURANT_STATUS_UNKNOWN,
  CLIENT_WAITING_TABLE,
  CLIENT_TABLE_ASSIGNED,
  CLIENT_LANDING,
  NOT_MONITORING,
  MONITORING,
} from './STATES';

const MenyClientStateMachine = createMachine({
  id: 'meny_client_state_machine',
  initial: RESTAURANT_STATUS_UNKNOWN,
  context: {
    lineup_id: null,
    rest_id: null,
    menu_id: null,
    form_info: null,
    monitor_table_status: NOT_MONITORING,
    monitor_order_status: NOT_MONITORING,
  },
  states: {
    RESTAURANT_STATUS_UNKNOWN: {
      on: {
        // send({
        //   type: 'RESTAURANT_OPENED',
        //   rest_id,
        //   menu_id,
        // });
        RESTAURANT_OPENED: {
          target: RESTAURANT_OPENED,
          actions: [
            (context, event) => {
              context.rest_id = event.rest_id;
              context.menu_id = event.menu_id;
            },
            send(MONITORING, { to: 'meny_client_state_machine' }),
          ],
        },
        // send({
        //   type: 'RESTAURANT_CLOSED',
        //   rest_id,
        //   menu_id,
        // });
        RESTAURANT_CLOSED: {
          target: RESTAURANT_CLOSED,
          actions: [
            (context, event) => {
              context.rest_id = event.rest_id;
              context.menu_id = event.menu_id;
            },
          ],
        },
      },
    },
    RESTAURANT_OPENED: {
      // immediately take the transition to 'three'
      on: {},
      always: { target: CLIENT_LANDING },
    },
    RESTAURANT_CLOSED: {
      on: {
        CLIENT_LANDING: { target: CLIENT_LANDING },
        actions: [
          (context, event) => {
            context.form_info = event.form_info;
          },
        ],
      },
    },
    CLIENT_LANDING: {
      on: {
        CLIENT_WAITING_TABLE: {
          target: CLIENT_WAITING_TABLE,
          actions: [
            (context, event) => {
              context.form_info = event.form_info;
              context.monitor_table_status = MONITORING;
            },
          ],
        },
        RESTAURANT_CLOSED: { target: RESTAURANT_CLOSED },
      },
    },
    CLIENT_WAITING_TABLE: {
      on: {
        CLIENT_TABLE_ASSIGNED: {
          target: CLIENT_TABLE_ASSIGNED,
          actions: [
            (context, event) => {
              context.monitor_table_status = NOT_MONITORING;
            },
          ],
        },
        RESTAURANT_CLOSED: {
          target: RESTAURANT_CLOSED,
          actions: [
            (context, event) => {
              context.monitor_table_status = NOT_MONITORING;
            },
          ],
        },
      },
    },
    CLIENT_TABLE_ASSIGNED: {
      on: {
        CLIENT_BILL_CLEARED: { target: CLIENT_BILL_CLEARED },
        RESTAURANT_CLOSED: { target: RESTAURANT_CLOSED },
      },
    },
    CLIENT_BILL_CLEARED: {
      on: {},
      always: {
        target: RESTAURANT_STATUS_UNKNOWN,
        actions: [
          (context, event) => {
            context.rest_id = null;
            context.menu_id = null;
            context.monitor_table_status = NOT_MONITORING;
          },
        ],
      },
    },
  },
});

export { MenyClientStateMachine };
