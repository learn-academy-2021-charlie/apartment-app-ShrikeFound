import React, { Component } from "react"
import JobForm from "../../components/JobForm"

class JobsNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        company: "",
        title: "",
        city: "",
        state: "",
        description: "",
        confidenceLevel: "",
        salary: "",
        isRemote: "",
        notes: "",
      },
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createJob(this.state.form)
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  render() {
    const { form } = this.state
    return (
      <div>
        <h1>Create a Job Listing</h1>
        <JobForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          formData={form}
          submitText={"Create"}
        />
      </div>
    )
  }
}

export default JobsNew