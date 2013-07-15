class CoordinatesController < ApplicationController

	def new
		@coordinate = Coordinate.new()
	end

	def create
		@coordinate = Coordinate.new(coordinate_params)
		@coordinate.save

		if @coordinate.save
			render @coordinate
		else
			render 'new'
		end

	end

	def destroy 
		@coordinate = Coordinate.find(params[:id])
		@coordinate.destroy
		redirect_to coordinates_path
	end

	def show
		@coordinate = Coordinate.find(params[:id])
		respond_to do |format|
			format.html
			format.xml { render :xml => @coordinate }
			format.json { render :json => @coordinate }
		end
	end

	def index
		@coordinates = Coordinate.all
	end

	def edit
		@coordinate = Coordinate.find(params[:id])
	end

	def update
		@coordinate = Coordinate.find(params[:id])
		
		if @coordinate.update(coordinate_params)
			redirect_to coordinate_path
		else
			render 'edit'
		end
	end

	private
		def coordinate_params
			params.require(:coordinate).permit(:lat, :lng, :address)
		end

end
