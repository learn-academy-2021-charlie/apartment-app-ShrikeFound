class AddPrivateToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :is_private, :boolean
  end
end
