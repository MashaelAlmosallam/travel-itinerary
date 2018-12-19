class Place < ApplicationRecord
  has_many :visits
  mount_uploader :image, ImageUploader
end
