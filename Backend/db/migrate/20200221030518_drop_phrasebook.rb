class DropPhrasebook < ActiveRecord::Migration[6.0]
  def change
    drop_table :phrasebooks
  end
end
