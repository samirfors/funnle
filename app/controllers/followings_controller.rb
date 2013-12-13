class FollowingsController < ApplicationController

  def index
    email = params[:email]
    @user = User.where(email: email).first || User.new
    @users = User.all
    @following = @user.followed_users
  end

  def create
    email = params[:form][:email]
    followed = params[:form][:followed]
    user = User.where(email: email).first
    followed = User.where(email: followed).first
    user.followed_users << followed
    user.save!
    redirect_to "/?email=#{email}"
  end

end
