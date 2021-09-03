import React, { Component } from "react"

class JobForm extends Component {
  render() {
    const { formData, handleSubmit, handleChange, submitText } = this.props

    return (
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="label">
            <span>Company</span>
            <input
              type="text"
              name="company"
              id="company"
              className="text-input"
              onChange={handleChange}
              value={formData.company}
            />
          </label>

          <label className="label" htmlFor="company">
            <span>Title</span>
            <input
              type="text"
              name="title"
              id="title"
              className="text-input"
              onChange={handleChange}
              value={formData.title}
            />
          </label>

          <label className="label" htmlFor="city">
            <span>City</span>
            <input
              type="text"
              name="city"
              id="city"
              className="text-input"
              onChange={handleChange}
              value={formData.city}
            />
          </label>

          <label className="label" htmlFor="state">
            <span>State</span>

            <input
              type="text"
              name="state"
              id="state"
              className="text-input"
              onChange={handleChange}
              value={formData.state}
            />
          </label>

          <label className="label" htmlFor="description">
            <span>Description</span>
            <textarea
              type="text"
              name="description"
              id="description"
              className="text-input"
              onChange={handleChange}
              value={formData.description}
            />
          </label>

          <label className="label" htmlFor="confidence_level">
            <span>Confidence Level (1-10)</span>
            <input
              type="number"
              name="confidence_level"
              id="confidence_level"
              className="text-input"
              onChange={handleChange}
              value={parseInt(formData.confidence_level)}
            />
          </label>

          <label className="label" htmlFor="salary">
            <span>Salary (yearly)</span>

            <input
              type="number"
              name="salary"
              id="salary"
              className="text-input"
              onChange={handleChange}
              value={formData.salary}
            />
          </label>

          <label className="label flex items-center" htmlFor="is_remote">
            <span>Remote?</span>
            <input
              type="checkbox"
              name="is_remote"
              id="is_remote"
              className="form-checkbox text-yellow-500 ml-2"
              onChange={handleChange}
              value={formData.isRemote}
            />
          </label>

          <label className="label" htmlFor="notes">
            <span>Notes</span>

            <textarea
              type="text"
              name="notes"
              id="notes"
              className="text-input"
              onChange={handleChange}
              value={formData.notes}
            />
          </label>
        </div>
        <button className="button">{submitText}</button>
      </form>
    )
  }
}

export default JobForm
