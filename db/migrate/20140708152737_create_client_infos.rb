class CreateClientInfos < ActiveRecord::Migration
  def change
    create_table :client_infos do |t|
      t.string      :firstname
      t.string      :lastname
      t.integer     :phone
      t.string      :address
      t.string      :city
      t.string      :state
      t.integer     :zip
      
      t.references  :client, index: true
      t.timestamps
    end
  end
end
