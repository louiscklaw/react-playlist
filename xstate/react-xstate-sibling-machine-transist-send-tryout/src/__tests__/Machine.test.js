import { interpret } from 'xstate';
import { toggleMachine1 } from 'src/StateMachines/toggleMachine1.js';

it('should eventually reach "success"', (done) => {
  const toggle1Service = interpret(toggleMachine1).onTransition((state) => {
    if (state.matches('STATE_TWO')) {
      done();
    }
  });

  toggle1Service.start();
  toggle1Service.send('STATE_TWO');
});
