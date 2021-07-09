import { createMachine } from 'xstate';

const openMenu = (context) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('reject'), 3000);
    setTimeout(() => resolve('resolve'), 1000);
  });
};

const closeMenu = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('reject'), 3000);
    setTimeout(() => resolve('resolve'), 1000);
  });
};

// This machine is completely decoupled from React
export const toggleMachine = createMachine({
  id: 'toggle',

  initial: 'closed',
  states: {
    closed: {
      on: { OPEN: 'opening' },
    },
    opening: {
      invoke: {
        src: (context, event) => openMenu(context),
        onDone: { target: 'open' },
      },
      on: { CLOSE: 'closing' },
    },
    open: {
      on: { CLOSE: 'closing' },
    },
    closing: {
      invoke: {
        src: (context, event) => closeMenu(context),
        onDone: { target: 'closed' },
      },
      on: { OPEN: 'opening' },
    },
  },
});
