import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import ProtectedRoute from "./components/ProtectedRoute"
import About from "./pages/About"
import Home from "./pages/Home"
import JobsEdit from "./pages/Jobs/JobsEdit"
import JobsIndex from "./pages/Jobs/JobsIndex"
import JobsNew from "./pages/Jobs/JobsNew"
import JobsShow from "./pages/Jobs/JobsShow"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      statuses: []
    }
  }

  getJobs = async () => {
    const loggedIn = this.props.logged_in
    const url = loggedIn ? "/jobs" : "/sample_jobs"
    const response = await fetch(url)
    const result = await response.json()
    this.setState({ jobs: result })
  }

  getStatuses = async () => {
    const loggedIn = this.props.logged_in
    const url = "/statuses"
    const response = await fetch(url)
    const result = await response.json()
    this.setState({ statuses: result })
  }

  createJob = async (jobData) => {
    const url = "/jobs"
    try {
      const response = await fetch(url, {
        body: JSON.stringify(jobData),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })

      await response.json()
      this.getJobs()
    } catch (error) {
      console.log("create errors: ", error)
    }
  }

  updateJob = async (jobData) => {
    const url = `/jobs/${jobData.id}`
    try {
      const response = await fetch(url, {
        body: JSON.stringify(jobData),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
      })

      await response.json()
      this.getJobs()
    } catch (error) {
      console.log("create errors: ", error)
    }
  }

  deleteJob = async (id) => {
    const url = `/jobs/${id}`
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      })
      this.getJobs()
    } catch (error) {
      console.log("create errors: ", error)
    }
  }

  componentDidMount() {
    this.getJobs()
    this.getStatuses()
  }

  render() {
    console.log(this.state.statuses)
    const {
      logged_in,
      new_user_route,
      sign_in_route,
      sign_out_route,
      current_user,
    } = this.props
    return (
      <Router>
        <div className=" relative w-10/12 max-w-6xl mx-auto font-mono">
          <Header
            logged_in={logged_in}
            new_user_route={new_user_route}
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
          />
          <div className="pt-48 pb-10 min-h-screen">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Home jobs={this.state.jobs} />}
              />
              <Route path="/about" component={About} />
              <ProtectedRoute
                path="/jobsindex"
                sign_in_route={sign_in_route}
                logged_in={logged_in}
                jobs={this.state.jobs}
                component={JobsIndex}
              />

              <ProtectedRoute
                path="/jobsnew"
                sign_in_route={sign_in_route}
                logged_in={logged_in}
                createJob={this.createJob}
                component={JobsNew}
              />

              {/* <ProtectedRoute
              path="/jobsedit/:id"
              sign_in_route={sign_in_route}
              logged_in={logged_in}
              jobs={this.state.jobs}
              component={JobsEdit}
            /> */}
              {logged_in && (
                <Route
                  path="/jobsedit/:id"
                  render={(props) => {
                    const id = props.match.params.id
                    const job = this.state.jobs.find((job) => job.id === +id)
                    console.log("routing information")
                    console.log(
                      "id: ",
                      id,
                      " job: ",
                      job,
                      " jobs: ",
                      this.state.jobs
                    )
                    return <JobsEdit job={job} updateJob={this.updateJob} />
                  }}
                />
              )}

              <Route
                path="/jobsshow/:id"
                render={(props) => {
                  const id = props.match.params.id
                  const job = this.state.jobs.find((job) => job.id === +id)
                  return (
                    <JobsShow
                      job={job}
                      deleteJob={this.deleteJob}
                      logged_in={logged_in}
                    />
                  )
                }}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
