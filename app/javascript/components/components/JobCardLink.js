import React, { Component } from "react"
import { Link } from "react-router-dom"

class JobCardLink extends Component {
  render() {
    const {job} = this.props
    return (
      <Link key={job.id} to={`jobsshow/${job.id}`}>
        <div className="mt-4 shadow p-4 hover:shadow-lg">
          <h3>
            <span className="text-lg text-yellow-500">{job.status.name}</span>{" "}
            <span className="text-lg font-bold">{job.title}</span>{" "}
            <span className="text-gray-300">
              {job.is_remote ? "(remote)" : "(not remote)"}
            </span>
          </h3>
          <p>{job.description}</p>
        </div>
      </Link>
    )
  }
}

export default JobCardLink
