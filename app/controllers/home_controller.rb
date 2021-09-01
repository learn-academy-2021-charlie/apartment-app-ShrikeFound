class HomeController < ApplicationController


  def sample_jobs
  
    jobs = Job.limit(2)
    render json: jobs
  
  end


end
