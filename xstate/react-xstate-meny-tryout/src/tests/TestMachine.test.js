import { interpret } from 'xstate';
import { MenyClientStateMachine } from 'src/StateMachines/MenyClientStateMachine.js';

it('should eventually reach "RESTAURANT_OPENED"', (done) => {
  const MenyClientService = interpret(MenyClientStateMachine).onTransition(
    (state) => {
      if (state.matches('RESTAURANT_OPENED')) {
        done();
      }
    }
  );

  MenyClientService.start();

  MenyClientService.send({ type: 'CHECKED_RESTAURANT_OPEN', id: 42 });
});
