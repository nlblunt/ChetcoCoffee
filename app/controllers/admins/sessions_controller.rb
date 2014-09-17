class Admins::SessionsController < Devise::SessionsController
    def create
      resource = Admin.find_by_email(params[:email])
      if resource != nil
      	if resource.valid_password?(params[:password])
        	sign_in :admin, resource
      	end
      end
      
      render nothing: true
    end
end