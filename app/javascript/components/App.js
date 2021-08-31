import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import JobsIndex from './pages/Jobs/JobsIndex'
import JobsShow from './pages/Jobs/JobsShow'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      jobs: []
    }
  }


  getSampleJobs = async () =>{
    const url = this.props.sample_jobs_route
    const response = await fetch(url)
    const result = await response.json()
    this.setState({jobs: result})
  }


  componentDidMount(){
    this.getSampleJobs();
  }

  render() {
    const {logged_in,new_user_route,sign_in_route,sign_out_route,current_user} = this.props
    return (
      <Router>
        <div className=" w-10/12 max-w-6xl mx-auto font-mono ">
          <Header 
            logged_in={logged_in} 
            new_user_route={new_user_route} 
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
          />
          <Switch>
            <Route exact path="/" render = {(props) => <Home jobs={this.state.jobs}/>}/>
            <Route path="/about" component={About}/>
            <Route path="/jobindex" component={JobsIndex}/>
            <Route path="/jobshow/:id" render = {(props) =>{
              const id = props.match.params.id 
              const job = this.state.jobs.find(job => job.id === +id)
              return <JobsShow job={job}/>

            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
