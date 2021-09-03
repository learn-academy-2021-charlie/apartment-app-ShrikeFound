import React from 'react'
import { Route } from 'react-router-dom'

const ProtectedRoute = ({
  logged_in,
  sign_in_route,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        logged_in ? (
          <Component {...props} {...rest} />
        ) : (
          location.assign(sign_in_route)
        )
      }
    />
  )
}

export default ProtectedRoute
