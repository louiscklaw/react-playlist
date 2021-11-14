import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function Example() {
  let [debug, setDebug] = React.useState(null);
  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    fetch('/test-get-json').then((res) => res.json())
  );

  React.useEffect(() => {
    setDebug({ ...data }, null, 2);
    console.log('data', data);
    console.log('data', { ...data });
  }, [data]);

  if (isLoading) return <>Loading...</>;

  if (error) return <>'An error has occurred: ' {error.message}</>;

  return (
    <div>
      <h1>{data.name}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(debug, null, 2)}</pre>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
