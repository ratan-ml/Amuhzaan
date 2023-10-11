json.extract! @cart_item, :id, :product_id, :quantity # :user_id, 
json.product @cart_item.product, :name, :price