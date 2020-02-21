class User < ApplicationRecord
    has_many :phrasebooks
    belongs_to :nation
    has_secure_password
    validates :username, presence: true
    validates :email, presence: true, uniqueness: {case_sensisitive: false}
end
