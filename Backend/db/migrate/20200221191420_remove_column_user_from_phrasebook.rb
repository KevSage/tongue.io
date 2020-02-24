class RemoveColumnUserFromPhrasebook < ActiveRecord::Migration[6.0]
  def change
    remove_column :phrasebooks, :user_id
  end
end
