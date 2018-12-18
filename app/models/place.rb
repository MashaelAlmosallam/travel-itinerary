class Place < ApplicationRecord
  has_many :visits
  geocoded_by :address
  after_validation :geocode
end
