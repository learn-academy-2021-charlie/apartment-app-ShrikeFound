import React, { Component } from "react"
import { Link } from "react-router-dom"

class JobCard extends Component {
  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  render() {
    const { job, deleteJob, logged_in } = this.props
    return (
      <div className="mt-4 p-4 border border-black border-2 ">
        <h3 className="text-lg font-bold">{job.company}</h3>
        <h4>{job.title}</h4>
        <p className="mt-1">Salary: {this.formatter.format(job.salary)}</p>
        <p className="mt-2">{job.description}</p>
        <p className="mt-2 text-gray-700 text-sm">
          {job.city}, {job.state}
        </p>
        <span className="text-gray-400 font-normal text-sm">
          {job.is_remote ? " (remote)" : " (not remote)"}
        </span>
        <Link to={`/jobsedit/${job.id}`} className="button yellow">
          Edit
        </Link>
        {logged_in && (
          <Link
            to="/jobsindex"
            className="button red"
            onClick={() => deleteJob(job.id)}
          >
            Delete
          </Link>
        )}
      </div>
    )
  }
}

export default JobCard
