class Nation < ApplicationRecord
  belongs_to :language
  has_many :user_nations
  has_many :users, through: :user_nations
end
