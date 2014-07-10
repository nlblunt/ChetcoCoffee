class CpanelController < ApplicationController
  def index
    # Check for admin sign in
    if(admin_signed_in?)
      render 'index'
    else
      #Not valid admin
      redirect_to welcome_index_path
    end
  end
end
