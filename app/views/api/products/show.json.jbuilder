json.product do 
    json.extract! @product, :id, :category, :name, :description, :price
end

reviews = @product.reviews.where(product_id: @product.id)

json.reviews do 
    reviews.each do |review|
        json.set! review.id do
            json.extract! review, :title, :body, :rating, :user_id, :product_id
            json.username review.user.name
        end
    end
end
