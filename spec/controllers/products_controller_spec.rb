require 'rails_helper'

RSpec.describe ProductsController, :type => :controller do
	describe "GET 'index'" do
		it "Returns a list of products" do
			# Create 2 products for index
			FactoryGirl.create(:product)
			FactoryGirl.create(:product)

			get :index, format: :json

			expect(assigns(:products).count).to eq(2)
		end
	end

	describe "POST 'create'" do
		describe "With valid product params" do
			it "Creates a new product" do
				post :create, product:{name: "Name", description: "Description", price: "1.00"}, format: :json

				expect((Product.all).count).to eq(1)

				expect(response.status).to eq(200)
			end
		end

		describe "With invalid product params" do
			it "Doesn't create a new product" do
				post :create, product:{name: nil, description: "Description", price: "1.00"}, format: :json
				expect((Product.all).count).to eq(0)

				post :create, product:{name: "Name", description: "Description", price: "-1.00"}, format: :json
				expect((Product.all).count).to eq(0)

				expect(response.status).to eq(500)
			end
		end
	end
end
