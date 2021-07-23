import { interpret } from 'xstate';
import { render } from '@testing-library/react';

import { MenyClientStateMachine } from 'src/StateMachines/MenyClientStateMachine.js';

import { MonitorTableStatusMachine } from 'src/StateMachines/MonitorTableStatusMachine.js';

import App from 'src/App';

it('test path opened -> waiting table -> table assigned -> bill cleared', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      if (machine_step == 5) {
        if (state.matches('RESTAURANT_STATUS_UNKNOWN')) {
          expect(state.context.rest_id).toBe(null);
          expect(state.context.menu_id).toBe(null);
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

it('test path opened -> waiting table -> closed', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.error(machine_step);
      // console.error(state.value);
      if (machine_step == 4) {
        if (state.matches('RESTAURANT_CLOSED')) {
          expect(state.context.rest_id).toBe('hello_rest');
          expect(state.context.menu_id).toBe('hello_menu');
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
  MenyClientService.send('RESTAURANT_CLOSED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
});

it('test path opened -> waiting table -> table assigned -> closed', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.error(machine_step);
      // console.error(state.value);
      if (machine_step == 5) {
        if (state.matches('RESTAURANT_CLOSED')) {
          expect(state.context.rest_id).toBe('hello_rest');
          expect(state.context.menu_id).toBe('hello_menu');
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
  MenyClientService.send('RESTAURANT_CLOSED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
});

it('test path closed -> waiting table ->  closed', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.error(machine_step);
      // console.error(state.value);
      if (machine_step == 4) {
        if (state.matches('RESTAURANT_CLOSED')) {
          expect(state.context.rest_id).toBe('hello_rest');
          expect(state.context.menu_id).toBe('hello_menu');
          done();
        }
      }
    }
  );

  MenyClientService.start();
  MenyClientService.send('RESTAURANT_CLOSED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
  MenyClientService.send('CLIENT_WAITING_TABLE');
  MenyClientService.send('RESTAURANT_CLOSED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
});

it('test path closed -> waiting table -> table assigned -> closed', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.error(machine_step);
      // console.error(state.value);
      if (machine_step == 5) {
        if (state.matches('RESTAURANT_CLOSED')) {
          expect(state.context.rest_id).toBe('hello_rest');
          expect(state.context.menu_id).toBe('hello_menu');
          done();
        }
      }
    }
  );

  MenyClientService.start();
  MenyClientService.send('RESTAURANT_CLOSED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
  MenyClientService.send('CLIENT_WAITING_TABLE');
  MenyClientService.send('CLIENT_TABLE_ASSIGNED');
  MenyClientService.send('RESTAURANT_CLOSED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
});

it('test path opened -> closed', (done) => {
  let machine_step = 0;
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.error(machine_step);
      // console.error(state.value);
      if (machine_step == 2) {
        if (state.matches('RESTAURANT_CLOSED')) {
          expect(state.context.rest_id).toBe('hello_rest');
          expect(state.context.menu_id).toBe('hello_menu');
          done();
        }
      }
    }
  );

  MenyClientService.start();
  MenyClientService.send('RESTAURANT_CLOSED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
});

it('test ', (done) => {
  let machine_step = 0;

  const MonitorTableStatus = interpret(MonitorTableStatusMachine);

  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      machine_step = machine_step + 1;
      // console.error(machine_step);
      // console.error(state.value);
      if (machine_step == 2) {
        if (state.matches('RESTAURANT_CLOSED')) {
          expect(state.context.rest_id).toBe('hello_rest');
          expect(state.context.menu_id).toBe('hello_menu');
          done();
        }
      }
    }
  );

  MonitorTableStatus.start();
  MenyClientService.start();
  MenyClientService.send('RESTAURANT_CLOSED', {
    rest_id: 'hello_rest',
    menu_id: 'hello_menu',
  });
});
