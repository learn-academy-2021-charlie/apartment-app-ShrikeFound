import React, { Component } from "react"
import JobCardLink from "../components/JobCardLink"

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
            <JobCardLink key={j.id} job={j}/>
            )
          })}
      </div>
    )
  }
}

export default Home
