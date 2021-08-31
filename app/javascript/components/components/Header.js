import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header className=" mt-12 mb-20 flex justify-between">
        
        <Link to="/">RANGER | Job Hunt Tracker</Link>
        <nav >
          <Link to="/" className="p-2 hover:bg-yellow-300 focus:bg-yellow-300">Home</Link>
          <Link to="/about" className="ml-4 p-2 hover:bg-yellow-300 focus:bg-yellow-300">About</Link>
        </nav>

      </header>
    )
  }
}

export default Header
