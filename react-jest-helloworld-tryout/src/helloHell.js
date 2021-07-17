export function helloFunc() {
  return 'helloFunc';
}

export function helloAsync() {
  return new Promise((res, rej) => {
    console.log('helloAsync');
    res('helloAsync');
  });
}

// export const helloAsync = () => {
//   return 'helloAsync';
// };
