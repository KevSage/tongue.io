class Entry < ApplicationRecord
  belongs_to :phrasebook
  belongs_to :phrase
end
