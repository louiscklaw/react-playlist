
const getFetch_url = (username_in) => `https://api.travis-ci.com/owner/${username_in}/repos`



function fetchRepos( url, travis_token ) {
  return fetchWithToken( url, travis_token )
      .then( r => r.json() )
}

function fetchWithToken( url_in, travis_token ) {
  console.log('fetchWithToken')
  return fetch( url_in, {
      headers: {
        'Travis-API-Version': 3,
        'Authorization': `token ${travis_token}`
      }
    } )
}

export {fetchWithToken, getFetch_url, fetchRepos}