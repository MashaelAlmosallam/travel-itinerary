class Place < ApplicationRecord
  has_many :visits
  geocoded_by :address
  after_validation :geocode
  mount_uploader :image, ImageUploader
end
