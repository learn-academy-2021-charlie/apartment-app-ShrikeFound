class AddStatusIdToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :status_id, :integer
  end
end
