class Product < ApplicationRecord
  mount_uploader :image, ImageUploader
  

  has_many :favorites
  has_many :favorited_users, :through => :favorites, :source => :user
end
