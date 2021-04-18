import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider, useQuery, useMutation } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios'

function Example() {
  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res => res.json()),
  )

  const mutation = useMutation(newTodo => axios.post('https://httpbin.org/post', newTodo))

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <button
        onClick={async () => {
          mutation.mutate({ id: new Date(), title: 'Do Laundry' })
        }}
      >
        Create Todo
      </button>
      <pre>{JSON.stringify(mutation.data, null, 2)}</pre>
      <h1>{data.name}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}
