class Product < ActiveRecord::Base
  has_many :cart_items
  has_many :carts, through: :cart_items
  validates :name, :description, presence: true
  validates :price, presence: true, numericality: {greater_than: 0}
  
  #Adds the product to the clients shopping cart
  def add_to_cart(client_id, product_id, quantity)
    # Get the clients cart
    cart = Cart.find(client_id)
    
    # Add a new cart_item to the cart with product_id and quantity
    cart.cart_items.create(product_id: product_id, quantity: quantity)
  end
end
