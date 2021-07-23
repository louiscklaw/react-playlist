import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { useMachine } from '@xstate/react';

import { MenyClientStateProvider } from 'src/contexts/MenyClientStateContext';

import { MenyClientStateMachine } from 'src/StateMachines/MenyClientStateMachine';
import { MonitorTableStatusMachine } from 'src/StateMachines/MonitorTableStatusMachine';
import { MonitorOrderStatusMachine } from 'src/StateMachines/MonitorOrderStatusMachine';
import { MonitorRestaurantConfigMachine } from 'src/StateMachines/MonitorRestaurantConfigMachine';

import { Machine1 } from './Machine1';

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  // let [current_monitor_table_status, sendMonitorTableStatusMachine] =
  //   useMachine(MonitorTableStatusMachine);
  // let [current_monitor_order_status, sendMonitorOrderStatusMachine] =
  //   useMachine(MonitorOrderStatusMachine);
  // let [current_monitor_restaurant_config, sendMonitorRestaurantConfigMachine] =
  //   useMachine(MonitorRestaurantConfigMachine);

  let monitor_table_status_machine = useMachine(MonitorTableStatusMachine);
  let monitor_order_status_machine = useMachine(MonitorOrderStatusMachine);
  let monitor_restaurant_config_machine = useMachine(
    MonitorRestaurantConfigMachine
  );
  let client_state_machine = useMachine(MenyClientStateMachine);

  let all_machine = {
    monitor_table_status_machine,
    monitor_order_status_machine,
    monitor_restaurant_config_machine,
    client_state_machine,
  };

  return (
    <div className="App">
      <AppContext.Provider value={{}}>
        <MenyClientStateProvider />

        {children}
      </AppContext.Provider>
    </div>
  );
}
