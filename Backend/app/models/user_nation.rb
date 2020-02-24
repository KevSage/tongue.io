class UserNation < ApplicationRecord
  belongs_to :user
  belongs_to :nation
end
