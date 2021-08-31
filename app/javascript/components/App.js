import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import JobsIndex from './pages/Jobs/JobsIndex'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      jobs: []
    }
  }


  getSampleJobs = async () =>{
    const url = this.props.jobs_route
    console.log("fetching from: ",url)
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)
  }


  componentDidMount(){
    console.log("jobs index path: ",this.props)
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
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/jobs" component={JobsIndex}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
