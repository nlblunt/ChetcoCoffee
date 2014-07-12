require 'rails_helper'
require './spec/factories/client_info.rb'

RSpec.describe ClientInfo, :type => :model do
  it "belongs to a client" do
    expect(FactoryGirl.build(:client_info, client_id: nil)).not_to be_valid
    #$cinfo = FactoryGirl.build(:client_info, client_id: nil)
    #expect($cinfo.client_id).to be_truthy
  end
  
  it "is invalid without a first name" do
    expect(FactoryGirl.build(:client_info, firstname: nil)).not_to be_valid
  end
  
  it "is invalid without a last name" do
      expect(FactoryGirl.build(:client_info, lastname: nil)).not_to be_valid
  end

  it "has at least one phone number" do
    expect(FactoryGirl.build(:client_info, phone: nil)).not_to be_valid
  end
  
  it "has a valid address" do
    expect(FactoryGirl.build(:client_info, address: nil)).not_to be_valid
  end
  
  it "creates an associated shopping cart" do
    c = FactoryGirl.create(:client_info)
    #c.create_shopping_cart
    expect(Cart.count).to be > 0
    #expect change(c.create_shopping_cart, :count).by(1)
  end
end
