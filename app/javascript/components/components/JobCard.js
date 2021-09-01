import React, { Component } from 'react'

class JobCard extends Component {

  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })


  render() {
    console.log(this.formatter)
    const {job} = this.props
    return (
      <div className="mt-4 p-4 shadow-lg">
            <h3 className="text-lg font-bold">
              <span className="text-yellow-500 font-normal">
                {job.status.name}
              </span>{" "}
                {job.company} | {job.title}
              <span className="text-gray-400 font-normal">
                {job.is_remote ? " (remote)" : " (not remote)"}
              </span>
            </h3>
            <p className="mt-1">Salary: {this.formatter.format(job.salary / 100)}</p>
            <p className="mt-2">{job.description}</p>
            <p className="mt-2 text-gray-400">
              {job.city}, {job.state}
            </p>
          </div>
    )
  }
}

export default JobCard
