require 'rails_helper'

RSpec.describe CpanelController, :type => :controller do
  describe "GET 'index'" do
    it "redirects all to home ('/')" do
      get 'index'
      expect(response).to redirect_to(welcome_index_path)
    end
  end

  describe "GET 'admin_check'" do
    describe "Admin signed in" do
      it "renders :admin_check w/ ID>0" do
        @testadmin = FactoryGirl.create(:admin)
        sign_in :admin, @testadmin

        get :admin_check, format: :json
        expect(assigns(:admin).id).not_to eq(0)
      end
    end

    describe "Admin not signed in" do
      it "renders admin_check w/ ID:0" do
        get :admin_check, format: :json
        expect(assigns(:admin).id).to eq(0)
      end
    end
  end   
end
