import { createMachine, actions } from 'xstate';
const { raise } = actions;

const raiseActionDemo = createMachine({
  id: 'raisedmo',
  initial: 'entry',
  states: {
    entry: {
      on: {
        STEP: {
          target: 'middle',
        },
        RAISE: {
          target: 'middle',
          // immediately invoke the NEXT event for 'middle'
          actions: raise('NEXT'),
        },
      },
    },
    middle: {
      on: {
        NEXT: { target: 'last' },
      },
    },
    last: {
      on: {
        RESET: { target: 'entry' },
      },
    },
  },
});
Click;
