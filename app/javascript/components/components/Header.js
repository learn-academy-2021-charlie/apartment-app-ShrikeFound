import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
  render() {
    const {logged_in,sign_out_route,sign_in_route} = this.props
    console.log("sign in route: ",sign_in_route)
    console.log("sign out route: ",sign_out_route)
    console.log("loggedIn: ",logged_in)
    return (
      <header className=" mt-12 mb-20 flex justify-between">
        
        <Link to="/">RANGER | Job Hunt Tracker</Link>
        <nav >
          <Link to="/jobs" className="nav-link">Jobs</Link>
          <Link to="/about" className="ml-4 nav-link">About</Link>
          {logged_in ? <a className="ml-4 nav-link" href={sign_out_route}>Log Out</a> : <a className="ml-4 nav-link" href={sign_in_route}>Log In</a>}
        </nav>

      </header>
    )
  }
}

export default Header
