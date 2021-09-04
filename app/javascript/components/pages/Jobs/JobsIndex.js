import React, { Component } from "react"
import { Link } from "react-router-dom"
import JobCard from "../../components/JobCard"
import JobCardLink from "../../components/JobCardLink"

class JobsIndex extends Component {
  render() {
    const { jobs, buckets, statuses } = this.props
    console.log("index statuses: ", statuses)
    return (
      <div>
        <h1 className="page-header">Job Board</h1>

        <div className="board grid grid-cols-5 gap-1 mt-2">
          {statuses &&
            statuses.map((status) => {
              console.log(status)
              return (
                <div key={status.id}>
                  <h3
                    className={`priority-${status.priority} text-center text-lg`}
                  >
                    {status.name}
                  </h3>

                  {buckets[status.name] &&
                    buckets[status.name].map((job) => {
                      return <JobCard key={job.id} job={job} />
                    })}
                </div>
              )
            })}

          {/* {jobs &&
            jobs.map((j) => {
              return <JobCard key={j.id} job={j} />
            })} */}
        </div>
        <Link className="button yellow" to="/jobsnew">
          New Job listing
        </Link>
      </div>
    )
  }
}

export default JobsIndex
