import React, { Component } from "react"
import JobCard from "../../components/JobCard"

class JobsShow extends Component {

  render() {
    const { job, deleteJob, logged_in } = this.props
    return (
      <div>
        <h1>Show me a Job</h1>
        {job && (
          <JobCard job={job} deleteJob={deleteJob} logged_in={logged_in} />
        )}
      </div>
    )
  }
}

export default JobsShow
