import React from 'react';
import useSWR from 'swr'
import { request, gql } from 'graphql-request'

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

  return (
    <div className="App">
      helloworld
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
