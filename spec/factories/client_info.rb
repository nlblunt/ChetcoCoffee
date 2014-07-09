FactoryGirl.define do
  factory :client_info do |f|
    f.client_id '1'
    f.firstname {Faker::Name.first_name}
    f.lastname {Faker::Name.last_name}
    f.address {Faker::Address.street_address}
    f.city {Faker::Address.city}
    f.zip {Faker::Address.zip}
    f.phone {Faker::PhoneNumber.phone_number}
  end
end