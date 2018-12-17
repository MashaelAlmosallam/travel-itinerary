class Visit < ApplicationRecord
  belongs_to :schedule
  belongs_to :place
end
