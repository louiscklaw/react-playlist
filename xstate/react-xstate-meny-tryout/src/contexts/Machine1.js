import React from 'react';

const NOT_MONITORING = 'NOT_MONITORING';
const MONITORING = 'MONITORING';

const RESTAURANT_OPENED = 'RESTAURANT_OPENED';
const RESTAURANT_CLOSED = 'RESTAURANT_CLOSED';
const CLIENT_LANDING = 'CLIENT_LANDING';
const CLIENT_WAITING_TABLE = 'CLIENT_WAITING_TABLE';
const CLIENT_TABLE_ASSIGNED = 'CLIENT_TABLE_ASSIGNED';
const CLIENT_BILL_CLEARED = 'CLIENT_BILL_CLEARED';
const RESTAURANT_STATUS_UNKNOWN = 'RESTAURANT_STATUS_UNKNOWN';

export function Machine1({ all_machine }) {
  // let [current_monitor_table_status, sendMonitorTableStatusMachine] =
  //   useMachine(MonitorTableStatusMachine);
  // let [current_monitor_order_status, sendMonitorOrderStatusMachine] =
  //   useMachine(MonitorOrderStatusMachine);
  // let [current_monitor_restaurant_config, sendMonitorRestaurantConfigMachine] =
  //   useMachine(MonitorRestaurantConfigMachine);

  let { client_state_machine, monitor_order_status_machine } = all_machine;
  let [current_client_state, sendClientState] = client_state_machine;
  let [current_monitor_order_status, sendMonitorOrderStatus] =
    monitor_order_status_machine;

  React.useEffect(() => {
    if (current_client_state.matches(RESTAURANT_STATUS_UNKNOWN)) {
      sendMonitorOrderStatus(MONITORING);
    } else {
      sendMonitorOrderStatus(NOT_MONITORING);
    }
  }, [current_client_state]);

  return <>Machine1</>;
}
