import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class JobsShow extends Component {

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

  });



  render() {
    const {job} = this.props
    if(job){
    return (
      <div>
        <h1>Show me a Job</h1>
        <div className="mt-4 p-4 shadow-lg">
                <h3 className="text-lg font-bold"><span className="text-yellow-500">{job.status.name}</span> <span  className="hover:text-yellow-600" >{job.company} | {job.title}</span><span className="text-gray-300">{job.is_remote ? "(remote)":"(not remote)"}</span></h3>
                <p>Salary: {this.formatter.format(job.salary/100)}</p>
                <p className="mt-2">{job.description}</p>
                <p className="mt-2">{job.city}, {job.state}</p>
              </div>
      </div>
    )
    }else{
      return <Redirect to="/"/>
    }
  }
}

export default JobsShow
