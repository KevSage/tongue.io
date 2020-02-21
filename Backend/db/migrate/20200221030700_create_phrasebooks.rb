class CreatePhrasebooks < ActiveRecord::Migration[6.0]
  def change
    create_table :phrasebooks do |t|
      t.references :language, null: false, foreign_key: true
      t.integer :average_score
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
