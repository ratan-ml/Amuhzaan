class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :category, null: false
      t.string :name, null: false
      t.text :feature, default: [], array: true
      t.text :description, null: false
      t.float :price, null: false

      t.timestamps
    end
    add_index :products, :name
  end
end
