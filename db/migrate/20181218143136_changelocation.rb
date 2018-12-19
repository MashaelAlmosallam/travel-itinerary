class Changelocation < ActiveRecord::Migration[5.2]
  def change
    rename_column :places, :location, :address 
  end
end
