import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function Example() {
  const { isLoading, error, data, isFetching } = useQuery('repoData', () => fetch('http://0.0.0.0:5001/react-tryout-e8aa2/us-central1/widgets/helloWorld_json').then((res) => res.json()));

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div>{isFetching ? 'Updating TestReactQuery...' : ''}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default function TestReactQuery() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    </>
  );
}
