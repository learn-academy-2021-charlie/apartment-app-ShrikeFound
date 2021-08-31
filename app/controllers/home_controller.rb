class HomeController < ApplicationController


  def sample_jobs
  
    jobs = Job.limit(5)
    render json: jobs
  
  end


end
