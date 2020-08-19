import React from 'react'
import useSWR from 'swr'
import graphql from graphql
import { request } from 'graphql-request'

import './App.css';

const API = 'https://api.graph.cool/simple/v1/movies'
const fetcher = query => request(API, query)


function App() {
  const { data, error } = useSWR(
    `{
      Movie(title: "Inception") {
        releaseDate
        actors {
          name
        }
      }
    }`,
    fetcher
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className="App">
      helloworld {data.hello}
    </div>
  );
}

export default App;
