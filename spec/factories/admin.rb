FactoryGirl.define do
  factory :admin do |f|
    f.email {Faker::Internet.email}
    f.password {Faker::Internet.password}
    #f.password_confirmation f.password
  end
end