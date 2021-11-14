import React, {Component} from 'react'

import {Link} from 'react-router-dom'

export default class Dashboard extends Component{
  render(){
    return(
      <>
        dashboard
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
      </>
    )
  }
}