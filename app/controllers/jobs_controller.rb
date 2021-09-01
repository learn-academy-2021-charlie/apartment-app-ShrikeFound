class JobsController < ApplicationController
  before_action :authenticate_user! , except: [:sample_jobs]
  def index 
    jobs = current_user.jobs 
    render json: jobs, include: ['status']
  
  end


  def sample_jobs
  
    jobs = Job.where(is_private: false).limit(2)
    render json: jobs, include: ['status']
  
  end

end
