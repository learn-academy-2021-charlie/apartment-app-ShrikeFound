import React, { Component } from "react"
import JobForm from "../../components/JobForm"

export class JobsEdit extends Component {
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

  componentDidMount = () => {
    console.log(this.props.match.params)
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
      <>
        <h1>Edit this Job Listing</h1>
        <JobForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          formData={form}
        />
      </>
    )
  }
}

export default JobsEdit
