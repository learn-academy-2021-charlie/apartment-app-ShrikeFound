import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className=" w-10/12 max-w-6xl mx-auto font-mono ">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
