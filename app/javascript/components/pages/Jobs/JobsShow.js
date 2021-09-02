import React, { Component } from "react"
import JobCard from "../../components/JobCard"

class JobsShow extends Component {

  render() {
    const { job } = this.props
      return (
        <div>
          <h1>Show me a Job</h1>
          {job && <JobCard job={job}/>}
        </div>
      )
  }
}

export default JobsShow
