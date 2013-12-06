class PicksController < ApplicationController
  def create
    user = User.where(email: params[:email]).first
    user.picks << Pick.create url: params[:email]
  end
end
