class FollowingsController < ApplicationController

  def index()
    email = params[:email]
    @user = User.where(email: email).first || User.new
    @users = User.all.to_a
    @following = @user.followings.to_a
  end

  def create
    user = User.where(email: params[:email]).first
    followee = User.where(email: params[:followee]).first
    @user.followed_users << followee
    @user.save
  end

end
