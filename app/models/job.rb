class Job < ApplicationRecord
  belongs_to :user
  belongs_to :status

  validates :company,:title, presence: true, length: {minimum: 3, maximum: 20}
  validates :is_remote, inclusion: { in: [ true, false ] }
  validates :is_private, inclusion: { in: [ true, false ] }

  before_validation :connect_status, on: :create


  def connect_status
    status = Status.find_by(name: "lead")

    self.status = status
  end

end
