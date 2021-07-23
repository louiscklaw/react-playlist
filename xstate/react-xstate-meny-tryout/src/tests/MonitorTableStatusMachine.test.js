import { interpret } from 'xstate';
import { MenyClientStateMachine } from 'src/StateMachines/MenyClientStateMachine';

it('test path opened -> waiting table', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.debug(machine_step);
      // console.debug(state.value);
      if (machine_step == 3) {
        if (state.matches('CLIENT_WAITING_TABLE')) {
          expect(MenyClientStateMachine.context.monitor_table_status).toBe(
            'MONITORING'
          );
          done();
        }
      }
    }
  );

  MenyClientService.start();
  MenyClientService.send('RESTAURANT_OPENED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
  MenyClientService.send('CLIENT_WAITING_TABLE');
});

it('test path opened -> waiting table -> table assigned', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.debug(machine_step);
      // console.debug(state.value);
      if (machine_step == 4) {
        if (state.matches('CLIENT_TABLE_ASSIGNED')) {
          expect(MenyClientStateMachine.context.monitor_table_status).toBe(
            'NOT_MONITORING'
          );
          done();
        }
      }
    }
  );

  MenyClientService.start();
  MenyClientService.send('RESTAURANT_OPENED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
  MenyClientService.send('CLIENT_WAITING_TABLE');
  MenyClientService.send('CLIENT_TABLE_ASSIGNED');
});

it('test path opened -> waiting table -> table assigned -> bill cleared', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.debug(machine_step);
      // console.debug(state.value);
      if (machine_step == 5) {
        if (state.matches('RESTAURANT_STATUS_UNKNOWN')) {
          expect(MenyClientStateMachine.context.monitor_table_status).toBe(
            'NOT_MONITORING'
          );
          done();
        }
      }
    }
  );

  MenyClientService.start();
  MenyClientService.send('RESTAURANT_OPENED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
  MenyClientService.send('CLIENT_WAITING_TABLE');
  MenyClientService.send('CLIENT_TABLE_ASSIGNED');
  MenyClientService.send('CLIENT_BILL_CLEARED');
});

it('test path opened -> waiting table -> table assigned -> restaurant closed', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.debug(machine_step);
      // console.debug(state.value);
      if (machine_step == 5) {
        if (state.matches('RESTAURANT_CLOSED')) {
          expect(MenyClientStateMachine.context.monitor_table_status).toBe(
            'NOT_MONITORING'
          );
          done();
        }
      }
    }
  );

  MenyClientService.start();
  MenyClientService.send('RESTAURANT_OPENED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
  MenyClientService.send('CLIENT_WAITING_TABLE');
  MenyClientService.send('CLIENT_TABLE_ASSIGNED');
  MenyClientService.send('RESTAURANT_CLOSED');
});

it('test path opened -> waiting table -> table assigned -> restaurant closed', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.debug(machine_step);
      // console.debug(state.value);
      if (machine_step == 4) {
        if (state.matches('RESTAURANT_CLOSED')) {
          expect(MenyClientStateMachine.context.monitor_table_status).toBe(
            'NOT_MONITORING'
          );
          done();
        }
      }
    }
  );

  MenyClientService.start();
  MenyClientService.send('RESTAURANT_OPENED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
  MenyClientService.send('CLIENT_WAITING_TABLE');
  MenyClientService.send('RESTAURANT_CLOSED');
});

it('test path opened -> waiting table -> table assigned -> restaurant closed', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.debug(machine_step);
      // console.debug(state.value);
      if (machine_step == 5) {
        if (state.matches('RESTAURANT_CLOSED')) {
          expect(MenyClientStateMachine.context.monitor_table_status).toBe(
            'NOT_MONITORING'
          );
          done();
        }
      }
    }
  );

  MenyClientService.start();
  MenyClientService.send('RESTAURANT_OPENED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
  MenyClientService.send('CLIENT_WAITING_TABLE');
  MenyClientService.send('CLIENT_TABLE_ASSIGNED');
  MenyClientService.send('RESTAURANT_CLOSED');
});
