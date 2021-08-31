import React, { Component } from "react"
import { Link } from "react-router-dom"

class Home extends Component {
  render() {
    const { jobs } = this.props
    return (
      <div>
        <h1 className="page-header">Home</h1>
        <h2>Jobs being hunted as we speak:</h2>
        {jobs &&
          jobs.map((j) => {
            return( 
            <Link key={j.id} to={`jobshow/${j.id}`}>
              <div className="mt-4 shadow p-4 hover:shadow-lg">
                <h3><span className="text-lg font-bold">{j.title}</span> <span className="text-gray-300">{j.is_remote ? "(remote)":"(not remote)"}</span></h3>
                <p>{j.description}</p>
              </div>
            </Link>
            )
          })}
      </div>
    )
  }
}

export default Home
