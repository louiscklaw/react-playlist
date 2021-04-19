import React from 'react'
import { QueryClient, QueryClientProvider, useQuery, useMutation } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios'

import fetch_test_long_processing_json from './apis/fetch_test_long_processing_json'

function Example() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://127.0.0.1:3001/test-get-json').then(res => res.json()),
  )

  // let unstable_test = useQuery('unstable_test', () =>
  //   fetch('http://127.0.0.1:3001/test-unstable-get-json').then(res => res.json()),
  // )

  let unstable_test = useQuery('unstable_test', async () => {
    const response = await fetch('http://127.0.0.1:3001/test-unstable-get-json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })

  let long_process_duration_test = useQuery(
    'long_process_duration_test',
    () => fetch('http://127.0.0.1:3001/test-long-processing-json').then(res => res.json()),
    { staleTime: 3000 },
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

      <div>unstable test</div>
      <pre>{JSON.stringify(unstable_test.data, null, 2)}</pre>

      <div>long_process_duration_test</div>
      <pre>{JSON.stringify(long_process_duration_test.data, null, 2)}</pre>

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
