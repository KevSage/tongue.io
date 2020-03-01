class Phrasebook < ApplicationRecord
  belongs_to :language
  belongs_to :user
  has_many :entries
  has_many :phrases, through: :entries, dependent: :destroy
end
