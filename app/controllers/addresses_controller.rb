class AddressesController < ApplicationController
	before_filter :get_address, :only => [:show, :edit, :update, :destroy]
	
	def get_address
		@address = Address.find(params[:id])
	end

	def new
		@address = Address.new
	end

	def create
		@address = Address.new(address_params)

		if @address.save
			redirect_to @address
		else
			render 'new'
		end
	end

	def show
		respond_to do |format|
			format.html
			format.xml { render :xml => @address }
			format.json { render :json => @address }
		end
	end

	def index
		@addresses = Address.all
	end

	def edit
	end

	def update
		if @address.update(address_params)
			redirect_to @address
		else
			render 'edit'
		end
	end

	def destroy
		@address.destroy
		redirect_to addresses_path
	end

#	def check_auth
#		http_basic_authenticate_with name: "jmb", password: "pass", except:[:index,:show,:new,:create]
# end

	private 
		def address_params
			params.require(:address).permit(:street_address, :city, :state, :zip)
		end
end
