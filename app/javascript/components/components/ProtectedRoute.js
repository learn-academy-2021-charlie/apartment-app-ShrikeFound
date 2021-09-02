import React from 'react'
import { Route } from 'react-router-dom'

const ProtectedRoute  = ({ logged_in,sign_in_route,children, ...rest }) =>{

  console.log("rendering protected page")
  return (
    <Route {...rest} render={() => logged_in ? children : location.assign(sign_in_route)} />
  )

}

export default ProtectedRoute
