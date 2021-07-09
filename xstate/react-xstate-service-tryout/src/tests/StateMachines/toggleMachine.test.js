import { interpret } from 'xstate';
import { toggleMachine } from 'src/StateMachines/toggleMachine.js';

it('should eventually reach "open"', (done) => {
  const toggleService = interpret(toggleMachine).onTransition((state) => {
    if (state.matches('open')) {
      done();
    }
  });

  toggleService.start();

  toggleService.send({ type: 'OPEN' });
});

it('should eventually reach "closed"', (done) => {
  const toggleService = interpret(toggleMachine).onTransition((state) => {
    if (state.matches('closed')) {
      done();
    }
  });

  toggleService.start('open');

  toggleService.send({ type: 'CLOSE' });
});
