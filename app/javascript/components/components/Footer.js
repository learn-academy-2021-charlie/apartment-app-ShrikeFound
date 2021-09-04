import React, { Component } from "react"
import { Link } from "react-router-dom"

class Footer extends Component {
  render() {
    return (
      <footer className="w-10/12 max-w-6xl flex mx-auto justify-center items-center bg-white h-28">
        <Link to="/about" className="nav-link">
          Created by Alfonso Martinez
        </Link>
      </footer>
    )
  }
}

export default Footer
