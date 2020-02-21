class User < ApplicationRecord
    has_many :phrasebooks
    belongs_to :nation
end
