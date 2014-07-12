class ClientInfo < ActiveRecord::Base
  has_one :cart
  validates :firstname, :lastname, :address, presence: true
  validates :client_id, :phone, presence: true
  
  after_initialize do
    # Create an associated shopping cart.  Everyone gets one.
    self.create_cart()
  end
end
