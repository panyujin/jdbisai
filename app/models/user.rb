class User < ApplicationRecord
  has_many :orders
  has_many :favorites
  has_many :favorited_products, :through => :favorites, :source => :product
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  def admin?
    is_admin
  end

  def is_like?(product)
    favorited_products.include?(product)
  end

  def like!(product)
    favorited_products << product
  end

  def unlike!(product)
    favorited_products.delete(product)
  end


end
