class RenameFavoritesGroupIdToProductId < ActiveRecord::Migration[5.0]
  def change
    rename_column :favorites, :group_id, :product_id
  end
end
