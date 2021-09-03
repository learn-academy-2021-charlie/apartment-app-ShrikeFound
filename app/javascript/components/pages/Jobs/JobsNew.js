import React, { Component } from "react"
import { Redirect } from "react-router"
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
        confidence_level: "",
        salary: "",
        is_remote: "",
        is_private: true,
        notes: "",
      },
      formSubmitted: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createJob(this.state.form)
    this.setState({ formSubmitted: true })
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
        {this.state.formSubmitted && <Redirect to="/jobsindex" />}
      </div>
    )
  }
}

export default JobsNew