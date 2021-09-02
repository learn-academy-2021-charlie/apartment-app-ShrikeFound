import React, { Component } from "react"
import { Link } from "react-router-dom"

class JobsIndex extends Component {
  render() {
    const { jobs } = this.props
    return (
      <div>
        <h1 className="page-header">Job Board</h1>
        {jobs &&
          jobs.map((j) => {
            return (
              <Link key={j.id} to={`jobsshow/${j.id}`}>
                <div className="mt-4 shadow p-4 hover:shadow-lg">
                  <h3>
                    <span className="text-lg text-yellow-500">
                      {j.status.name}
                    </span>{" "}
                    <span className="text-lg font-bold">{j.title}</span>{" "}
                    <span className="text-gray-300">
                      {j.is_remote ? "(remote)" : "(not remote)"}
                    </span>
                  </h3>
                  <p>{j.description}</p>
                </div>
              </Link>
            )
          })}
      </div>
    )
  }
}

export default JobsIndex
