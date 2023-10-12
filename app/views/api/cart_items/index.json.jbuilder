@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :product_id, :quantity # :user_id, 
        json.product cart_item.product, :id, :name, :price
    end
end

# current_user.cartItems # from association table/method
# iterate
# hypo: :id, :user_id, :product_id, :quantity