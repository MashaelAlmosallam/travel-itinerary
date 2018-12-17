class Schedule < ApplicationRecord
  has_many :visits
  belongs_to :user
end
