json.extract! @cart_item, :id, :product_id, :quantity
json.product @cart_item.product, :id, :name, :price