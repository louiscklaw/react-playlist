import React from 'react'

import sample from './sample.json'

class GithubApiTest extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      result: null,
      response_status: '',
      error: ""
    }
  }

  getGithubReposJson = () => {
    let myRequest = new Request('https://api.github.com/users/louiscklaw/repos?page=1&per_page=2')
    fetch(myRequest)
    .then(result => {
      console.log(result)
      this.setState({...this.state, response_status: result.status})
      return result.json()
    })
    .then(json => this.setState({...this.state, result: json}))
    .catch(err => {
      console.log(this.status.response_status)
      console.log('error found')
      console.log(err)
      this.setState({...this.state, error: err.message})
    })
  }

  // temporary skipping to not fire api rate limit error
  componentDidMount1 = () => {
    this.getGithubReposJson()
  }

  componentDidMount = () => {
    this.setState({...this.state, result: sample})
  }

  isNullOrUndefined = (obj_in) => {
    return obj_in == undefined || obj_in == null
  }

  getTravisComGithubUrl = (repo_full_name) => {
    return `https://travis-ci.com/github/${repo_full_name}`
  }

  getTravisUrlFromGithubJson = (json_in) => {
    if (this.isNullOrUndefined(json_in)){
      return ''
    }else{
      console.log(json_in)
      return json_in.map(x => this.getTravisComGithubUrl(x.full_name))
    }
  }

  grabInfoFromGithubJson = (json_in) => {
    if (this.isNullOrUndefined(json_in)){
      return {}
    }else{
      console.log(json_in)
      let temp = {}
      json_in.forEach(x => {
        return temp[x.full_name] = {
          repo_full_name: this.getTravisComGithubUrl(x.full_name),
          master_branch_status: this.getBuildBadge(x.full_name, 'master'),
          develop_branch_status: this.getBuildBadge(x.full_name, 'develop')
        }
      })
      return {
        user_avatar: '123321',
        repos: temp
      }
      // json_in.owner.avatar_url,
    }
  }

  getBuildBadge = (repo_full_name, branch) => {
    return `https://travis-ci.com/${repo_full_name}.svg?branch=${branch}`
  }

  showError = () => {
    return(
      <>
        {this.state.error}
      </>
    )
  }

  render(){
    return(
      <>
        {this.showError()}
        <pre>
          {JSON.stringify(this.grabInfoFromGithubJson(this.state.result), null, 2)}
        </pre>
        <pre>
          {JSON.stringify(this.state.result, null, 2)}
        </pre>
      </>
    )
  }
}

export default GithubApiTest
