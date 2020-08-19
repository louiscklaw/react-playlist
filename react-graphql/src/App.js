import React from 'react';

import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';


import './App.css';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function App() {
  let [result ,setResult] = React.useState('')

  React.useEffect(()=>{
    client
    .query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `
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
