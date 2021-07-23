import { createMachine } from 'xstate';

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

const MonitorTableStatusMachine = createMachine({
  id: 'meny_client_state_machine',
  initial: NOT_MONITORING,
  context: {
    lineup_id: null,
    rest_id: null,
    menu_id: null,
    form_info: null,
    monitor_table_status: NOT_MONITORING,
    monitor_order_status: NOT_MONITORING,
  },
  states: {
    MONITORING: { on: { NOT_MONITORING: { target: NOT_MONITORING } } },
    NOT_MONITORING: { on: { MONITORING: { target: MONITORING } } },
  },
});

export { MonitorTableStatusMachine };
