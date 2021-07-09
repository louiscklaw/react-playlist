import { createMachine, assign } from 'xstate';

const fetchUser = (context) =>
  fetch(`https://www.example.com`)
    .then(() => {
      console.log('fetch', context);
    })
    .catch((err) => {});

const fetchMachine = createMachine({
  id: 'user',
  initial: 'idle',
  context: { userId: 42, user: undefined, error: undefined },
  states: {
    idle: {
      on: { FETCH: { target: 'loading' } },
    },
    loading: {
      invoke: {
        id: 'getUser',
        src: (context, event) => fetchUser(context),
        onDone: {
          target: 'success',
          actions: assign({ user: (context, event) => event.data }),
        },
        onError: {
          target: 'failure',
          actions: assign({ error: (context, event) => event.data }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading' },
      },
    },
  },
});

export { fetchMachine };
