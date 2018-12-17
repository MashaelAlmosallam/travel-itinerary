class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :name
      t.text :description
      t.string :location
      t.string :duration
      t.string :image
      t.integer :user_id
      t.timestamps
    end
  end
end
