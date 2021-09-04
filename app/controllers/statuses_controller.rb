class StatusesController < ApplicationController
  def index
    statuses = Status.order(priority: :desc)
    render json: statuses 
  end
end
