class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
      t.string :day
      t.time :start_time
      t.time :end_time
      t.integer :place_id
      t.integer :schedule_id
      t.timestamps
    end
  end
end
