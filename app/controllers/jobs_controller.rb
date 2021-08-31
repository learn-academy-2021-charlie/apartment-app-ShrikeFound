class JobsController < ApplicationController
  before_action :authenticate_user!
  def index 
    jobs = current_user.jobs 
    render json: jobs
  
  end


end
