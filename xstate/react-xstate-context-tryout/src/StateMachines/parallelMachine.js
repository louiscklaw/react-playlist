import { createMachine } from 'xstate';

const fileMachine = createMachine({
  id: 'file',
  type: 'parallel',
  states: {
    upload: {
      initial: 'idle',
      states: {
        idle: {
          on: {
            INIT_UPLOAD: { target: 'pending' },
          },
        },
        pending: {
          on: {
            UPLOAD_COMPLETE: { target: 'success' },
          },
        },
        success: {},
      },
    },
    download: {
      initial: 'idle',
      states: {
        idle: {
          on: {
            INIT_DOWNLOAD: { target: 'pending' },
          },
        },
        pending: {
          on: {
            DOWNLOAD_COMPLETE: { target: 'success' },
          },
        },
        success: {},
      },
    },
  },
});

console.log(fileMachine.initialState.value);
// => {
//   upload: 'idle',
//   download: 'idle'
// }
