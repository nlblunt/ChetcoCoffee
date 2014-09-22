class ProductsController < ApplicationController
	def index
		@products = Product.all

		respond_to do |format|
			format.json {render :index}
			format.html {render :index}
		end
	end

	def create
		if(Product.create(product_params).valid?)
			respond_to do |format|
				format.json {render status: :ok, nothing: true}
				format.html {render status: :ok, nothing: true}
			end
		else
			respond_to do |format|
				format.json {render status: :error, nothing: true}
				format.html {render status: :error, nothing: true}
			end
		end	
	end

private

	def product_params
		params.require(:product).permit(:name, :description, :price)
	end
end

