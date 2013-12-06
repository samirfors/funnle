class FollowingsController < ApplicationController

  def index()
    email = params[:email]
    @user = User.where(email: email).first || User.new
    @users = User.all.to_a
    @following = @user.followings.to_a
  end

end
