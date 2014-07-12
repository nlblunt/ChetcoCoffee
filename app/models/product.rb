class Product < ActiveRecord::Base
  validates :name, :description, presence: true
  validates :price, presence: true, numericality: {greater_than: 0}
  
end
