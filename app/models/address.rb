class Address < ActiveRecord::Base
	validates :street_address, presence: true, format: {with: /[0-9]+ [A-Za-z0-9 ]+/, message: "doesn't look like a street address"}
	validates :city, presence: true
	validates :state, presence: true
	validates :zip, numericality: { only_integer: true }, length: { is: 5, message: "should be 5 digits" }
end
