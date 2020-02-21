class RenameUsersCountry < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :country_id, :nation_id
  end
end
