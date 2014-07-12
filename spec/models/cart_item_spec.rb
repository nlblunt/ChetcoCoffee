require 'rails_helper'

RSpec.describe CartItem, :type => :model do
  it "has a quantity" do
    expect(CartItem.new(quantity: nil)).not_to be_valid
  end
  
  it "has a quantity > 0" do
    expect(CartItem.new(quantity: -1)).not_to be_valid
  end
end
