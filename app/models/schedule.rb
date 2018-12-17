class Schedule < ApplicationRecord
  has_many :visits
  belongs_to :user
  # belong_to :place, :through => :visits
end
