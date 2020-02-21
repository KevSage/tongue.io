class CreatePhrases < ActiveRecord::Migration[6.0]
  def change
    create_table :phrases do |t|
      t.string :category
      t.string :input

      t.timestamps
    end
  end
end
