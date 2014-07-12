class Product < ActiveRecord::Base
  has_many :cart_items
  has_many :carts, through: :cart_items
  validates :name, :description, presence: true
  validates :price, presence: true, numericality: {greater_than: 0}
  
end
