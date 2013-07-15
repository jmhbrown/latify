class CreateCoordinates < ActiveRecord::Migration
  def change
    create_table :coordinates do |t|
      t.float :lat
      t.float :lng
      t.string :address

      t.timestamps
    end
  end
end
