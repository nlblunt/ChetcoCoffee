class ClientInfo < ActiveRecord::Base
  validates :firstname, :lastname, :address, presence: true
  validates :client_id, :phone, presence: true
end
