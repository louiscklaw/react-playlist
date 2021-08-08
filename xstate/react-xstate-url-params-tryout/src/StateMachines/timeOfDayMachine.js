import { createMachine } from 'xstate';

export const timeOfDayMachine = createMachine(
  {
    id: 'timeOfDay',
    initial: 'unknown',
    context: {
      time: new Date(Date.now()),
    },
    states: {
      // Transient state
      unknown: {
        on: {
          '': [
            { target: 'morning', cond: 'isBeforeNoon' },
            { target: 'afternoon', cond: 'isBeforeSix' },
            { target: 'evening' },
          ],
        },
      },
      morning: {},
      afternoon: {},
      evening: {},
    },
  },
  {
    guards: {
      isBeforeNoon: (context) => {
        return context.time.getHours() < 12;
      },
      isBeforeSix: (context) => {
        return context.time.getHours() < 18;
      },
    },
  }
);
