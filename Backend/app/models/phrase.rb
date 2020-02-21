class Phrase < ApplicationRecord
    has_many :phrasebooks
    has_many :entries, through: :phrasebooks
end
