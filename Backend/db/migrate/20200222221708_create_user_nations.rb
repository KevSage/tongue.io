class CreateUserNations < ActiveRecord::Migration[6.0]
  def change
    create_table :user_nations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :nation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
