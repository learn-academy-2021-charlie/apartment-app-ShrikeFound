import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
  render() {
    const {logged_in,sign_out_route,sign_in_route} = this.props
    return (
      <header className=" fixed w-10/12 max-w-6xl flex justify-between items-center bg-white h-28">
        <Link to="/">RANGER | Job Tracker</Link>
        <nav>
          <Link to="/jobsindex" className="nav-link">
            Jobs
          </Link>
          <Link to="/about" className="ml-4 nav-link">
            About
          </Link>
          {logged_in ? (
            <a className="ml-4 nav-link" href={sign_out_route}>
              Log Out
            </a>
          ) : (
            <a className="ml-4 nav-link" href={sign_in_route}>
              Log In
            </a>
          )}
        </nav>
      </header>
    )
  }
}

export default Header
