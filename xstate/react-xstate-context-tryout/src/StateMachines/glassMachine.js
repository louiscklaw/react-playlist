import { createMachine, assign } from 'xstate';

// Action to increment the context amount
const addWater = assign({
  amount: (context, event) => context.amount + 1,
});

// Action to increment the context amount
const resetWater = assign({
  amount: 0,
});

// Guard to check if the glass is full
function glassIsFull(context, event) {
  return context.amount >= 10;
}

export const createGlassMachine = (amount = 0) => {
  return createMachine(
    {
      id: 'glass',
      // the initial context (extended state) of the statechart
      context: { amount },
      initial: 'empty',
      states: {
        empty: {
          on: {
            FILL: {
              target: 'filling',
              actions: 'addWater',
            },
          },
        },
        filling: {
          // Transient transition
          always: {
            target: 'full',
            cond: 'glassIsFull',
          },
          on: {
            FILL: {
              target: 'filling',
              actions: 'addWater',
            },
            RESET: {
              target: 'empty',
              actions: 'resetWater',
            },
            RESET_TO_FILL: {
              target: 'filling',
              actions: [
                (context, event) => {
                  context.amount = event.amount;
                },
              ],
            },
          },
        },
        full: {
          on: {
            RESET: {
              target: 'empty',
              actions: 'resetWater',
            },
          },
        },
      },
    },
    {
      actions: { addWater, resetWater },
      guards: { glassIsFull },
    }
  );
};

export const glassMachine = createGlassMachine(1);
