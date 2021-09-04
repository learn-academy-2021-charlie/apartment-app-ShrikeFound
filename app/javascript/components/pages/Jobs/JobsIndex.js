import React, { Component } from "react"
import { Link } from "react-router-dom"
import JobCard from "../../components/JobCard"
import JobCardLink from "../../components/JobCardLink"

class JobsIndex extends Component {
  render() {
    const { jobs } = this.props
    return (
      <div>
        <h1 className="page-header">Job Board</h1>

        <div className="board grid grid-cols-5">
          {jobs &&
            jobs.map((j) => {
              return <JobCard key={j.id} job={j} />
            })}
        </div>
        <Link className="button yellow" to="/jobsnew">
          New Job listing
        </Link>
      </div>
    )
  }
}

export default JobsIndex
