class CpanelController < ApplicationController
  before_filter :check_auth
  
  def index
    # Check for admin sign in
    if(admin_signed_in?)
      render 'index'
    else
      #Not valid admin
      redirect_to welcome_index_path
    end
  end
  
  def admin_check
    if(admin_signed_in?)
      @admin = current_admin
      respond_to do |format|
        format.json {render :admin_check}
        format.html {render :admin_check}
      end
    else
      respond_to do |format|
        format.json {render status: :error, nothing: true}
        format.html {render status: :error, nothing: true}
      end
    end
  end
  
  def check_auth
    authenticate_or_request_with_http_basic do |username,password|
      resource = Admin.find_by_email(username)
      if resource.valid_password?(password)
        sign_in :admin, resource
      end
    end
  end
end
