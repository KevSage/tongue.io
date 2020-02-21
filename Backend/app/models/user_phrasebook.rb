class UserPhrasebook < ApplicationRecord
  belongs_to :phrasebook
  belongs_to :user
end
