import React from 'react';

import './App.css';
import {fetchWithToken, fetchRepos, getFetch_url} from './common'

function App() {
  let [repos_json, setReposJson] = React.useState()
  let [travis_token, setTravisToken] = React.useState('')

  const updateInputToken = (e)=>{
    e.preventDefault()
    let travis_token = e.target.value

    console.log(travis_token)

    setTravisToken(travis_token)

    fetchRepos(getFetch_url('louiscklaw'),travis_token)
      .then(r_json => setReposJson(r_json))

  }

  return (
    <div className="App">
      <div> helloworld </div>
      <pre>
        {JSON.stringify(repos_json,null, 2)}
      </pre>
      <div>{travis_token}</div>
      <input onChange={updateInputToken} placeholder="insert travis token here"/>
    </div>
  );
}

export default App;
