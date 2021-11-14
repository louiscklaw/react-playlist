import React, {Component} from 'react'
import { connect} from 'react-redux'
import createProject from '../store/actions/projectActions'

import {Redirect} from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title:'',
    content:''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.createProject(this.state)
    // this.props.history.push('/');
  }
  handleChange= (e) => {
    this.setState({[e.target.id]: e.target.value})
  }
  render(){
    const {auth} = this.props
    // if (!auth.uid) return <Redirect to="/signin" />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Project Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Create
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)