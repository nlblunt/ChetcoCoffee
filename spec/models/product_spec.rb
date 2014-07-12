require 'rails_helper'
require './spec/factories/product.rb'

RSpec.describe Product, :type => :model do
  it "has a valid name" do
    expect(FactoryGirl.build(:product, name: nil)).not_to be_valid
  end
  
  it "has a description" do
    expect(FactoryGirl.build(:product, description: nil)).not_to be_valid
  end
  
  it "has a valid price" do
    expect(FactoryGirl.build(:product, price: nil)).not_to be_valid
    #expect(FactoryGirl.build(:product, price: 'Alot')).to be_a(Float)
  end
  
  it "has a price greater than $0.00" do
    expect(FactoryGirl.build(:product, price: '-1.0')).not_to be_valid
  end
  
  it "adds to shopping cart" do
    client = FactoryGirl.create(:client_info)
    p = FactoryGirl.create(:product)
    p.add_to_cart(client.id, p.id, 1)
    expect(client.cart.cart_items.count).to be > 0
  end
end
