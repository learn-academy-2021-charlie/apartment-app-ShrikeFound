import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends Component {
  render() {
    const {children,logged_in,sign_in_route} = this.props
    if(logged_in){
      return children
    }else{
      location.assign(sign_in_route)
    }
  }
}

export default ProtectedRoute
