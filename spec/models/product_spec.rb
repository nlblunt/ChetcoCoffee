require 'rails_helper'
require './spec/factories/product.rb'

RSpec.describe Product, :type => :model do
  it "has a valid name" do
    expect(FactoryGirl.build(:product, name: nil)).not_to be_valid
  end
  
  it "has a description" do
    expect(FactoryGirl.build(:product, description: nil)).not_to be_valid
  end
  
  it "has a price" do
    expect(FactoryGirl.build(:product, price: nil)).not_to be_valid
  end
end
