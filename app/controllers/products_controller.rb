class ProductsController < ApplicationController
	def index
		@products = Product.all

		respond_to do |format|
			format.json {render :index}
			format.html {render :index}
		end
	end

	def
    create
    product_params = JSON.parse(params[:product])

    product = Product.create(product_params)
    if params[:image]
      product.image = params[:image][:image]
      product.save
    end

		if product.valid?
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

	def destroy
		product = Product.find(params[:id])
		product.delete

		render nothing: true
	end

	def show
		@product = Product.find_by_id(params[:id])

		if @product.valid?
			respond_to do |format|
				format.json {render :show}
				format.html {render :show}
			end
		else
			respond_to do |format|
				format.json {render status: :error}
				format.html {render status: :error}
			end
		end
	end

	def update
		@product = Product.find_by_id(params[:id])

		@product.update_attributes(product_params)
		render nothing: true
	end
private

	def product_params2
		params.require(:product).permit(:name, :description, :price, :image)
	end
end

