class User < ActiveRecord::Base
  has_many :followings, foreign_key: "follower_id", dependent: :destroy
  has_many :followed_users, through: :followings, source: :followed

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def to_s
    "Samir Fors <#{email}>"
  end
end
