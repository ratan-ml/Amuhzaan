json.product do 
    json.extract! @product, :id, :category, :name, :feature, :description, :price
    json.photoUrl @product.photo.attached? ? @product.photo.url : nil
end

# reviews = @product.reviews.where(product_id: @product.id)
reviews = @product.reviews.includes(:product)

json.reviews do 
    reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :title, :body, :rating, :user_id, :product_id, :updated_at
            json.username review.user.name
        end
    end
end
