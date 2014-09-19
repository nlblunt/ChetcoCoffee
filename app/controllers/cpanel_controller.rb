class CpanelController < ApplicationController
  
  def index
      #AngularJS App: Redirect all calls to home ('/')
      redirect_to welcome_index_path
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
        #create a blank admin
        @admin = Admin.new
        @admin.id = 0
        format.json {render :admin_check}#nothing: true}
        format.html {render :admin_check}#nothing: true}
      end
    end
  end
end
