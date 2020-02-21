class CreateNations < ActiveRecord::Migration[6.0]
  def change
    create_table :nations do |t|
      t.string :name
      t.string :capital
      t.string :region
      t.integer :population
      t.string :currency
      t.string :currency_code
      t.string :currency_symbol
      t.belongs_to :language
      t.string :flag

      t.timestamps
    end
  end
end
