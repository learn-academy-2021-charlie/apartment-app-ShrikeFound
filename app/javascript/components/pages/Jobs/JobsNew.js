import React, { Component } from "react"

class JobsNew extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    alert("submitting!")
    this.props.createJob()
  }

  render() {
    return (
      <div>
        <h1>New Job Page</h1>
        <form
          onSubmit={this.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="label">
              <span>Company</span>
              <input type="text" id="company" className="text-input" />
            </label>

            <label className="label" htmlFor="company">
              Title
            </label>
            <input type="text" id="title" className="text-input" />

            <label className="label" htmlFor="city">
              City
            </label>
            <input type="text" id="city" className="text-input" />

            <label className="label" htmlFor="state">
              State
            </label>
            <input type="text" id="state" className="text-input" />

            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea type="text" id="description" className="text-input" />

            <label className="label" htmlFor="confidence-level">
              Confidence Level (1-10)
            </label>
            <input type="text" id="confidence-level" className="text-input" />

            <label className="label" htmlFor="salary">
              Salary
            </label>
            <input type="number" id="salary" className="text-input" />

            <label className="label" htmlFor="is-remote">
              <span>Remote?</span>
              <input
                type="checkbox"
                id="is-remote"
                className="form-checkbox text-green-500"
              />
            </label>

            <label className="label" htmlFor="notes">
              Notes
            </label>
            <textarea type="text" id="notes" className="text-input" />
          </div>
          <button className="button">Create Job Listing</button>
        </form>
      </div>
    )
  }
}

export default JobsNew