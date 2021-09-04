class ChangeJobSalaryToDecimal < ActiveRecord::Migration[6.1]
  def change
    change_column :jobs, :salary, :decimal, precision: 15, scale: 2
  end
end
