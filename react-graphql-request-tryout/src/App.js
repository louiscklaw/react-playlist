import React from 'react';
import { request, gql } from 'graphql-request'

import './App.css';

const query = gql`
  {
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }
`

function App() {
  let [movie_result, setMovieResult] = React.useState('')
  request( 'https://api.graph.cool/simple/v1/movies', query )
    .then( ( data ) => setMovieResult(JSON.stringify(data)) )
  return (
    <div className="App">
      helloworld
      {movie_result}
    </div>
  );
}

export default App;
