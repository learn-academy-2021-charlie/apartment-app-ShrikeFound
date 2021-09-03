import React, { Component } from "react"

class JobsNew extends Component {
  render() {
    return (
      <div>
        <h1>New Job Page</h1>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="label" for="company">
              <span>Company</span>
              <input type="text" id="company" class="text-input" />
            </label>

            <label class="label" for="company">
              Title
            </label>
            <input type="text" id="title" class="text-input" />

            <label class="label" for="city">
              City
            </label>
            <input type="text" id="city" class="text-input" />

            <label class="label" for="state">
              State
            </label>
            <input type="text" id="state" class="text-input" />

            <label class="label" for="description">
              Description
            </label>
            <textarea type="text" id="description" class="text-input" />

            <label class="label" for="confidence-level">
              Confidence Level (1-10)
            </label>
            <input type="text" id="confidence-level" class="text-input" />

            <label class="label" for="salary">
              Salary
            </label>
            <input type="number" id="salary" class="text-input" />

            <label class="label" for="is-remote">
              <span>Remote?</span>
              <input
                type="checkbox"
                id="is-remote"
                class="form-checkbox text-green-500"
              />
            </label>

            <label class="label" for="notes">
              Notes
            </label>
            <textarea type="text" id="notes" class="text-input" />
          </div>
          <button class="button">Create Job Listing</button>
        </form>
      </div>
    )
  }
}

export default JobsNew