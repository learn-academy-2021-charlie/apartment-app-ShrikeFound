class StatusesController < ApplicationController
  def index
    statuses = Status.order(:priority)
    render json: statuses 
  end
end
