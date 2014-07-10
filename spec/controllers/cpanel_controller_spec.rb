require 'rails_helper'

RSpec.describe CpanelController, :type => :controller do
  describe "GET 'index'" do
    describe "Admin logged in" do
      it "returns the index page" do
        @admin = FactoryGirl.create(:admin)
        sign_in @admin
        get 'index'
        expect(response).to be_success
        sign_out @admin
      end
    end
    
    
    describe "Admin logged out" do
      it "fails to get cpanel, returns to homepage" do

        get 'index'
        expect(response).to redirect_to(welcome_index_path)
      end
    end
    

  end
end
