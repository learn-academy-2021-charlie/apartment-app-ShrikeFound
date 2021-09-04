class Job < ApplicationRecord
  belongs_to :user
  belongs_to :status

  before_validation :connect_status


  def connect_status
    status = Status.find_by(name: "lead")
    self.status = status
  end

end
