import React, { Component } from "react"
import { Link } from "react-router-dom"
import JobCardLink from "../../components/JobCardLink"

class JobsIndex extends Component {
  render() {
    const { jobs } = this.props
    return (
      <div>
        <h1 className="page-header">Job Board</h1>
        {jobs &&
          jobs.map((j) => {
            return <JobCardLink key={j.id} job={j} />
          })}
        <Link className="button" to="/jobsnew">
          New Job listing
        </Link>
      </div>
    )
  }
}

export default JobsIndex
