class ChangeColumnNamesInAddresses < ActiveRecord::Migration
  def change
  	change_table :addresses do |t|
			t.rename :street_add, :street_address
		end
	end
end
