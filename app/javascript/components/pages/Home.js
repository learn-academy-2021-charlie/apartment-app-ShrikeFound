import React, { Component } from "react"

class Home extends Component {
  render() {
    const { jobs } = this.props
    console.log(jobs)
    return (
      <div>
        <h1 className="page-header">Home</h1>
        <h2>Jobs being hunted as we speak:</h2>
        {jobs &&
          jobs.map((j) => {
            return( 
            <div key={j.id} className="mt-4 shadow p-4">
              <h3><span className="text-lg font-bold">{j.title}</span> <span className="text-gray-300">{j.is_remote ? "(remote)":"(not remote)"}</span></h3>
              <p>{j.description}</p>
              </div>
            )
          })}
      </div>
    )
  }
}

export default Home
