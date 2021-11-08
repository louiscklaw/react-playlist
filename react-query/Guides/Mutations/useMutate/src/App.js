import React from 'react';
import { QueryClient, QueryClientProvider, useMutation } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';

const queryClient = new QueryClient();

function Example() {
  let [is_loading, setIsLoading] = React.useState(true);

  const todo_mutation = useMutation((newTodo) => {
    return axios.post('/todos', newTodo).then(() => {
      console.log('/todo_mutation done');
    });
  });

  const another_mutation = useMutation((newTodo) => {
    return axios.post('/todos', newTodo).then(() => {
      console.log('/another_mutation done');
    });
  });

  React.useEffect(() => {
    if ([todo_mutation.isSuccess, another_mutation.isSuccess].every((t) => t)) {
      setIsLoading(false);
    }
  }, [todo_mutation, another_mutation]);

  React.useEffect(() => {
    todo_mutation.mutate({ id: new Date(), title: 'Do Laundry' });
    another_mutation.mutate({ id: new Date(), title: 'Do Laundry' });
  }, []);

  // const test = (newTodo) =>
  //   axios.post('/todos', newTodo).then(() => {
  //     console.log('/todo done');
  //   });

  // React.useEffect(() => {
  //   Promise.all([test({ id: new Date(), title: 'Do Laundry' })]).then(() => {
  //     console.log('loading done');
  //     setIsLoading(false);
  //   });
  // }, []);

  return <div>{is_loading ? <>loading</> : <>helloworld</>}</div>;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
