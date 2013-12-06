class FollowingsController < ApplicationController

  def index()
    params[:email]
    @user = User.where( email: "abc@asdf.se" ).first || User.new
  end

end
