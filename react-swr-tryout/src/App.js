import React from 'react';
import useSWR from 'swr'
import fetch from 'unfetch'

import './App.css';

const fetcher = url => fetch(url).then(r => r.json())

function App() {
  const { data, error } = useSWR('/helloworld.json', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className="App">
      helloworld {data.hello}
    </div>
  );
}

export default App;
