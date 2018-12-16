class CreateSightseeings < ActiveRecord::Migration[5.2]
  def change
    create_table :sightseeings do |t|
      t.string :name
      t.text :description
      t.string :location
      t.string :duration
      t.string :image
      t.timestamps
    end
  end
end
