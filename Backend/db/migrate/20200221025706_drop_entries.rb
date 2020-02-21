class DropEntries < ActiveRecord::Migration[6.0]
  def change
    drop_table :entries
  end
end
