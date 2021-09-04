import React, { Component } from "react"
import { Redirect } from "react-router"
import JobForm from "../../components/JobForm"

export class JobsEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: this.props.job,
      formSubmitted: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateJob(this.state.form)
    this.setState({ formSubmitted: true })
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  render() {
    const { form } = this.state
    const { job } = this.props
    return (
      <>
        <h1>Edit this Job Listing</h1>
        {form && (
          <JobForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            formData={form}
            isEditing
            submitText={"Update"}
          />
        )}
        {this.state.formSubmitted && <Redirect to={`/jobsshow/${job.id}`} />}
      </>
    )
  }
}

export default JobsEdit
