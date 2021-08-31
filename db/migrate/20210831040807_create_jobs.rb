class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :company
      t.string :title
      t.string :city
      t.string :state
      t.string :url
      t.text :description
      t.integer :confidence_level
      t.integer :salary
      t.boolean :is_remote
      t.text :notes
      t.integer :user_id

      t.timestamps
    end
  end
end
