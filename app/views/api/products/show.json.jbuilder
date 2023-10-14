json.extract! @product, :id, :category, :name, :description, :price

json.reviews do 
    @product.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :title, :body, :rating, :user_id, :product_id
        end
    end
end
