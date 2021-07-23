import React from 'react';
import { useMachine } from '@xstate/react';

import { MenyClientStateMachine } from 'src/StateMachines/MenyClientStateMachine';
import { MonitorTableStatusMachine } from 'src/StateMachines/MonitorTableStatusMachine';
import { MonitorOrderStatusMachine } from 'src/StateMachines/MonitorOrderStatusMachine';
import { MonitorRestaurantConfigMachine } from 'src/StateMachines/MonitorRestaurantConfigMachine';

const NOT_MONITORING = 'NOT_MONITORING';
const MONITORING = 'MONITORING';

const RESTAURANT_OPENED = 'RESTAURANT_OPENED';
const RESTAURANT_CLOSED = 'RESTAURANT_CLOSED';
const CLIENT_LANDING = 'CLIENT_LANDING';
const CLIENT_WAITING_TABLE = 'CLIENT_WAITING_TABLE';
const CLIENT_TABLE_ASSIGNED = 'CLIENT_TABLE_ASSIGNED';
const CLIENT_BILL_CLEARED = 'CLIENT_BILL_CLEARED';
const RESTAURANT_STATUS_UNKNOWN = 'RESTAURANT_STATUS_UNKNOWN';

export const MenyClientStateContext = React.createContext();
export function MenyClientStateProvider({ children }) {
  let [current_client_state, sendClientState] = useMachine(
    MenyClientStateMachine
  );
  let [current_monitor_table_status, sendMonitorTableStatusMachine] =
    useMachine(MonitorTableStatusMachine);
  let [current_monitor_order_status, sendMonitorOrderStatusMachine] =
    useMachine(MonitorOrderStatusMachine);
  let [current_monitor_restaurant_config, sendMonitorRestaurantConfigMachine] =
    useMachine(MonitorRestaurantConfigMachine);

  const seyHelloworld = () => {
    console.log('sayHelloworld');
  };

  // React.useEffect(() => {
  //   sendMonitorTableStatusMachine(
  //     current_client_state.context.monitor_table_status
  //   );
  // }, [current_client_state.context.monitor_table_status]);

  // React.useEffect(() => {
  //   sendMonitorOrderStatusMachine(
  //     current_client_state.context.monitor_order_status
  //   );
  // }, [current_client_state.context.monitor_order_status]);

  // const helloworld = () => {
  //   console.log('helloworld');
  // };

  // React.useEffect(() => {
  //   if (current_client_state.matches(CLIENT_BILL_CLEARED)) {
  //     sendMonitorOrderStatusMachine(NOT_MONITORING);
  //     helloworld();
  //   } else {
  //   }
  // }, [current_client_state]);

  return (
    <MenyClientStateContext.Provider value={{}}>
      <div style={{ display: 'flex', flexFlow: 'row' }}>
        <div>
          <pre>{JSON.stringify(current_client_state, null, 2)}</pre>
        </div>
        <div>
          <div>
            <button
              onClick={() => {
                sendClientState(RESTAURANT_OPENED);
              }}
            >
              RESTAURANT_OPENED
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                sendClientState(RESTAURANT_CLOSED);
              }}
            >
              RESTAURANT_CLOSED
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                sendClientState(CLIENT_LANDING);
              }}
            >
              CLIENT_LANDING
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                sendClientState(CLIENT_WAITING_TABLE);
              }}
            >
              CLIENT_WAITING_TABLE
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                sendClientState(CLIENT_TABLE_ASSIGNED);
              }}
            >
              CLIENT_TABLE_ASSIGNED
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                sendClientState(CLIENT_BILL_CLEARED);
              }}
            >
              CLIENT_BILL_CLEARED
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                sendClientState(RESTAURANT_STATUS_UNKNOWN);
              }}
            >
              RESTAURANT_STATUS_UNKNOWN
            </button>
          </div>
        </div>
      </div>
      {children}
    </MenyClientStateContext.Provider>
  );
}
