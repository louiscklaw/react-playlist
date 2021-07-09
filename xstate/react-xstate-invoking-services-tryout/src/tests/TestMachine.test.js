import { interpret } from 'xstate';
import { fetchMachine } from 'src/StateMachines/FetchMachine.js';

it('should eventually reach "success"', (done) => {
  const fetchService = interpret(fetchMachine).onTransition((state) => {
    if (state.matches('success')) {
      done();
    }
  });

  fetchService.start();

  fetchService.send({ type: 'FETCH', id: 42 });
});
