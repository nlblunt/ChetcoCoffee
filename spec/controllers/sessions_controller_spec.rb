require 'rails_helper'

RSpec.describe Admins::SessionsController, :type => :controller do
	describe "POST 'create'" do
		describe "has valid login params" do
			#create an admin to use
			before do
				@admin = FactoryGirl.create(:admin)
			end

			it "signs in the admin with status (200)" do
				@request.env["devise.mapping"] = Devise.mappings[:admin]
				@admin = FactoryGirl.create(:admin)
				post :create, {email: @admin.email, password: @admin.password}, format: :json	
				#post :create, params:{email: @admin.email}, format: :json

				expect(response.status).to eq(200)
			end
		end

		describe "has invalid login params" do
			it "returns 'Status: Forbidden" do
				@request.env["devise.mapping"] = Devise.mappings[:admin]
				@admin = FactoryGirl.create(:admin)
				post :create, {email: @admin.email, password: "Invalid Password"}, format: :json

				expect(response.status).to eq(403)
			end
		end
	end
end