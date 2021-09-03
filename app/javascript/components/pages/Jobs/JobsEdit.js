import React, { Component } from "react"
import JobForm from "../../components/JobForm"

export class JobsEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: this.props.job,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateJob(this.state.form)
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  render() {
    const { form } = this.state
    console.log("form info: ",form)
    return (
      <>
        <h1>Edit this Job Listing</h1>
        {form && <JobForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          formData={form}
          submitText = {"Update"}
        />}
      </>
    )
  }
}

export default JobsEdit
