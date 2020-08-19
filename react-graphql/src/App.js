import React from 'react';

import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';


import './App.css';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/movies',
  cache: new InMemoryCache()
});

function App() {
  let [result ,setResult] = React.useState('')

  React.useEffect(()=>{
    client
    .query({
      query: gql`{
        Movie(title: "Inception") {
          releaseDate
          actors {
            name
          }
        }
      }`
    })
    .then(query_result => setResult(query_result));
  },[])

  return (
    <div className="App">
      helloworld
      {
        JSON.stringify(result)
      }
    </div>
  );
}

export default App;
