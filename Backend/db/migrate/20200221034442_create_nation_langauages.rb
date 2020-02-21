class CreateNationLangauages < ActiveRecord::Migration[6.0]
  def change
    create_table :nation_langauages do |t|
      t.references :nation, null: false, foreign_key: true
      t.references :langauge, null: false, foreign_key: true

      t.timestamps
    end
  end
end
